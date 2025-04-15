import { Component } from "@angular/core";
import { CalendarEvent } from 'angular-calendar'
import { addDays } from 'date-fns'

@Component({
    templateUrl: './schedule.component.html',
    selector: 'schedule',
    standalone: false
})
export class ScheduleComponent {

    today!: Date
    targetDate!: Date

    sessions!: CalendarEvent[]

    showActiveDay = false
    showModal: boolean = false

    constructor() {
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
            }
        ]
    }

    dayClicked(day: any) {
        this.targetDate = day.date
        this.showActiveDay = this.showActiveDay ? false : (this.hasEventInThisDate(day.date) ? true : false)
    }

    private hasEventInThisDate(target: Date) {
        return this.sessions.some(s => s.start.getDate() === target.getDate())
    }

    toggleModal(): void {
        this.showModal = !this.showModal
    }
}