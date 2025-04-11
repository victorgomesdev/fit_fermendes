import { Component } from "@angular/core";
import { CalendarEvent } from 'angular-calendar'
import { Locale } from 'date-fns/locale'

@Component({
    templateUrl: './schedule.component.html',
    selector: 'schedule',
    standalone: false
})
export class ScheduleComponent {

    today!: Date
    sessions!: CalendarEvent[]
    calendarLocale!: Locale

    constructor() {
        this.today = new Date()
        this.sessions = [
            {
                title: "Aula 1",
                start: this.today,
            }
        ]
    }
}