import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Session } from "@shared/types/session.type";
import { SessionService } from "@services/sessions";
import { DateFormat } from "@shared/enums/date.enum";
import { BaseComponent } from "@components/base/base.component";
import { CalendarEvent } from 'angular-calendar'
import { addDays, addMonths, subMonths } from 'date-fns'
import { dateFormatterUtil } from "@shared/utils/date-input-formatter";

@Component({
    templateUrl: './schedule.component.html',
    selector: 'schedule',
    standalone: false
})
export class ScheduleComponent extends BaseComponent implements OnInit {

    dateFormats = DateFormat
    today!: Date
    targetDate!: Date

    sessions!: CalendarEvent<Session>[]

    showActiveDay: boolean = false
    showModal: boolean = false
    showSelectionTab: boolean = false

    sessionService: SessionService = inject(SessionService)

    override ngOnInit(): void {
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

        this.createForm()
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

    redirectToRegistration(): void {
        this.router.navigate(['/alunos/cadastrar'])
    }

    override createForm(): void {
        this.formGroup = this.formBuilder.group({
            data: [dateFormatterUtil(new Date()), Validators.required]
        })
    }
}