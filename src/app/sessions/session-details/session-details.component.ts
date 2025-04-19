import { Component } from "@angular/core";

@Component({
    templateUrl: './session-details.component.html',
    selector: 'session-details',
    standalone: false,
    styleUrl: './session-details.style.css'
})
export class SessionDetailsComponent { 
    show = false

    toogleModal() {
        this.show = !this.show
    }
}