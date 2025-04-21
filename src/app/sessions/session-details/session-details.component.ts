import { Component } from "@angular/core";

@Component({
    templateUrl: './session-details.component.html',
    selector: 'session-details',
    standalone: false
})
export class SessionDetailsComponent { 
    show = false

    toogleModal() {
        this.show = !this.show
    }
}