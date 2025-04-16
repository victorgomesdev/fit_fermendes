import { Component, OnInit } from "@angular/core";
import { CalendarEvent } from 'angular-calendar'
import { addDays, addMonths, subMonths } from 'date-fns'

@Component({
    templateUrl: './schedule.component.html',
    selector: 'schedule',
    standalone: false
})
export class ScheduleComponent implements OnInit {

    today!: Date
    targetDate!: Date

    sessions!: CalendarEvent[]

    showActiveDay: boolean = false
    showModal: boolean = false

    constructor() { }

    ngOnInit(): void {
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
    }

    dayClicked(day: any): void {
        this.targetDate = day.date
        this.showActiveDay = this.showActiveDay ? false : (this.hasEventInThisDate(day.date) ? true : false)
    }

    changeCurrentMonth(index: number): void {
        switch (index) {
            case 1: this.today = addMonths(this.today, 1); break;
            case -1: this.today = subMonths(this.today, 1); break;
            case 0: this.today = new Date()
        }
    }

    changeCurrentDate(event: Event): void {
        const date = new Date((<HTMLInputElement>event.target).value)
        this.today = date
    }

    private hasEventInThisDate(target: Date): boolean {
        return this.sessions.some(s => s.start.getDate() === target.getDate())
    }

    toggleModal(): void {
        this.showModal = !this.showModal
    }
}