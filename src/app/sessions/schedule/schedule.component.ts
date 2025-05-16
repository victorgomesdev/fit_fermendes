import { Component, inject } from "@angular/core";
import { Validators } from '@angular/forms'
import { Session } from "@shared/types/session.type";
import { SessionService } from "@services/sessions";
import { CategoryService } from "@services/category";
import { ClientService } from "@services/client";
import { DateFormat } from "@shared/enums/date.enum";
import { Category } from "@shared/types/category.type";
import { Client } from "@shared/types/client.type";
import { dateFormatterUtil } from "@shared/utils/date-input-formatter";
import { BaseComponent } from "@components/base/base.component";
import { CalendarEvent } from 'angular-calendar'
import { addDays, addMonths, subMonths } from 'date-fns'
import { debounceTime, distinctUntilChanged, filter } from "rxjs";

@Component({
    templateUrl: './schedule.component.html',
    selector: 'schedule',
    standalone: false
})
export class ScheduleComponent extends BaseComponent {

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
        this.createForm()
        this.subscribeToSearchInputChanges()
        this.categoryService.listAllCategories()
            .subscribe({
                next: (res: any) => this.categories = res.data,
            })
        this.today = new Date()

        this.sessions = [
            {
                title: "Aula 1",
                start: this.today,

            },
            {
                title: "Aula 2",
                start: addDays(this.today, 3),
            },
            {
                title: "Aula 3",
                start: addDays(this.today, 4),
            },
            {
                title: "Aula 4",
                start: addDays(this.today, 6),
            },
            {
                title: "Aula 5",
                start: addDays(this.today, 10),
            },
            {
                title: "Aula 6",
                start: addDays(this.today, 100),
            }
        ]

        this.activeRoute.queryParamMap
            .pipe(
                filter(params => params.has('newClientId'))
            ).subscribe({
                next: (params) => {
                    if (params.get('newClientId') && params.get('newClientName')) {
                        this.showClientNotFound = false
                        this.onClientSelected({ id: Number(params.get('newClientId')), nome: <string>params.get('newClientName') })
                        return
                    }
                }
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
                debounceTime(500),
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

    onClientSelected(client: Partial<Client>): void {
        const control = <number[]>this.formGroup.get('alunos')?.value;
        if (control.some(c => c === client.id)) {
            this.searchResult = []
            return
        }
        control.push(client.id as number)
        this.searchResult = []
        this.clients.push(client)
        this.formGroup.get('buscaAluno')?.reset()
        return
    }

    cancelClientSchedule(clientId: number | undefined): void {
        let control = <number[]>this.formGroup.get('alunos')?.value;
        control = control.filter(c => c !== clientId)
        this.formGroup.get('alunos')?.setValue(control)
        this.clients = this.clients.filter(c => c.id !== clientId)
        return
    }
}