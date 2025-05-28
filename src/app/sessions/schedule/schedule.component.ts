import { Component, inject, ViewChild } from "@angular/core";
import { Validators } from '@angular/forms'
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";
import { Session } from "@shared/types/session.type";
import { SessionService } from "@services/sessions";
import { CategoryService } from "@services/category";
import { ClientService } from "@services/client";
import { DateFormat } from "@shared/enums/date.enum";
import { Category } from "@shared/types/category.type";
import { Client } from "@shared/types/client.type";
import { dateFormatterUtil } from "@shared/utils/date-input-formatter";
import { sessionScheduleFactory } from "@shared/utils/schedule-request-factory";
import { calendarEventFactoryUtil } from "@shared/utils/session-factory.util";
import { BaseComponent } from "@components/base/base.component";
import { CalendarEvent } from 'angular-calendar'
import { debounceTime, distinctUntilChanged, filter } from "rxjs";
import { addMonths, subMonths } from 'date-fns'

@Component({
    templateUrl: './schedule.component.html',
    selector: 'schedule',
    standalone: false
})
export class ScheduleComponent extends BaseComponent {

    @ViewChild(SessionDetailsComponent) sessionDetails!: SessionDetailsComponent

    dateFormats = DateFormat
    today!: Date
    targetDate!: Date

    sessionToEdit!: Session

    sessions!: CalendarEvent<Session>[]
    categories!: Category[]
    searchResult: Client[] = []
    clients: Partial<Client>[] = []

    showActiveDay: boolean = false
    showModal: boolean = false
    showSelectionTab: boolean = false
    showClientNotFound: boolean = false

    sessionService = inject(SessionService)
    categoryService = inject(CategoryService)
    clientService = inject(ClientService)

    override ngOnInit(): void {
        this.today = new Date()
        this.sessionService.getAllSessions()
            .subscribe({
                next: (res: any) => {
                    let temp: CalendarEvent<Session>[] = [];
                    (res.data as Session[]).forEach(s => temp.push(calendarEventFactoryUtil(s)))
                    this.sessions = temp
                }
            })
        this.createForm()
        this.subscribeToSearchInputChanges()
        this.subscribeToRedirection()
        this.categoryService.listAllCategories()
            .subscribe({
                next: (res: any) => this.categories = res.data,
            })



        if (this.sessionService.savedSessionPartial) {
            this.formGroup.setValue(this.sessionService.getSessionPartial())
            this.sessionService.resetSessionPartial()
        }
    }

    dayClicked(day: any): void {
        this.targetDate = day.date
        this.showActiveDay = this.showActiveDay ? false : (this.hasEventInThisDate(day.date) ? true : false)
    }

    changeCurrentMonth(index: number): void {
        switch (index) {
            case 1: {
                this.today = addMonths(this.today, 1);
                break;
            }
            case -1: {
                this.today = subMonths(this.today, 1);
                break;
            }
            case 0: this.today = new Date()
        }
        this.formGroup.get('data')?.setValue(dateFormatterUtil(this.today));
    }

    changeCurrentDate(input: EventTarget | null): void {
        const date = (<HTMLInputElement>input).value ? new Date((<HTMLInputElement>input).value) : new Date()
        this.today = date
        this.formGroup.get('data')?.setValue(dateFormatterUtil(date))
    }

    private hasEventInThisDate(target: Date): boolean {
        return this.sessions.some(s => s.start.getDate() === target.getDate())
    }

    redirectToRegistration(clientName: string | undefined): void {
        const formValues = this.formGroup.value
        formValues.buscaAluno = ''
        this.sessionService.saveSessionDueRegistration(formValues)
        this.router.navigate(['/alunos/cadastrar'], {
            queryParams: {
                name: clientName
            }
        })
    }

    override createForm(): void {
        this.formGroup = this.formBuilder.group({
            data: [dateFormatterUtil(new Date()), Validators.required],
            modalidadeId: ['', Validators.required],
            observacao: '',
            alunos: [[], Validators.required],
            horario: ['', Validators.required],
            buscaAluno: ''
        })
    }

    private subscribeToSearchInputChanges(): void {
        this.formGroup.get('buscaAluno')?.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe(id => {
                if (id) {
                    this.clientService.getClientById(id)
                        .subscribe({
                            next: (val) => {
                                this.searchResult.push(val.data)
                            },
                            error: () => {
                                this.showClientNotFound = true
                            }
                        })
                    return
                }
                this.searchResult = []
                this.showClientNotFound = false
            })
    }

    private subscribeToRedirection(): void {
        this.activeRoute.queryParamMap
            .pipe(
                filter(params => params.has('newClientId') || params.has('edit'))
            ).subscribe({
                next: (params) => {
                    if (params.get('newClientId') && params.get('newClientName')) {
                        this.showClientNotFound = false
                        this.onClientSelected({ id: Number(params.get('newClientId')), nome: <string>params.get('newClientName') })
                        return
                    }
                    this.loadingService.show()
                    this.sessionService.getSessionById(Number(params.get('edit')))
                        .subscribe({
                            next: (res: any) => {
                                this.sessionToEdit = res.data
                                this.initializeFormOnEditing()
                            },
                            complete: () => {
                                this.loadingService.hide()
                            }
                        })
                }
            })
    }

    onClientSelected(client: Partial<Client>): void {
        const control = this.formGroup.get('alunos');
        const currentValue = <number[]>control?.value

        if (currentValue.some(c => c === client.id)) {
            this.searchResult = []
            return
        }
        currentValue.push(<number>client.id)
        control?.setValue(currentValue)
        this.searchResult = []
        this.clients.push(client)
        this.formGroup.get('buscaAluno')?.reset()
        return
    }

    onEventSelected(event: any): void {
        this.sessionDetails.toogleModal(event.meta)
    }

    cancelClientSchedule(clientId: number | undefined): void {
        let control = <number[]>this.formGroup.get('alunos')?.value;
        control = control.filter(c => c !== clientId)
        this.formGroup.get('alunos')?.setValue(control)
        this.clients = this.clients.filter(c => c.id !== clientId)
        return
    }

    saveForm(): void {
        if (this.formGroup.valid) {
            if (!this.sessionToEdit) {
                this.saveFormRegistering()
                return
            }
            this.saveFormEditing()
            return
        }
        this.alertService.warn('Campos não preenchidos ou inválidos!')
    }

    override saveFormRegistering(): void {
        this.loadingService.show()
        delete this.formGroup.value.buscaAluno
        this.sessionService.scheduleSession(sessionScheduleFactory(this.formGroup.value))
            .subscribe({
                next: (res: any) => {
                    this.alertService.success('Aula agendada com sucesso!')
                },
                complete: () => {
                    this.loadingService.hide()
                    this.router.navigate(['/aulas'])
                }
            })
    }

    override saveFormEditing(): void {
        this.loadingService.show()
        delete this.formGroup.value.buscaAluno
        this.sessionService.updateSession(<number>this.sessionToEdit.id, sessionScheduleFactory(this.formGroup.value))
            .subscribe({
                next: () => {
                    this.alertService.success('Aula atualizada com sucesso!')
                },
                complete: () => {
                    this.loadingService.hide()
                    this.router.navigate(['/aulas'])
                }
            })
    }

    private initializeFormOnEditing(): void {
        this.formGroup.setValue({
            data: this.sessionToEdit.data.split('T')[0],
            horario: this.sessionToEdit.data.split('T')[1].substring(0, 5),
            modalidadeId: this.sessionToEdit.modalidadeId,
            alunos: this.sessionToEdit.alunos.map((a: Client) => a.id),
            observacao: this.sessionToEdit.observacao,
            buscaAluno: ''
        })
        this.clients = this.sessionToEdit.alunos
    }
}