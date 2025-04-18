import { Component, output } from "@angular/core";

@Component({
    templateUrl: './session-card.component.html',
    selector: 'session-card',
    standalone: false
})
export class SessionCardComponet {

    selected = output()

    clicked(): void {
        this.selected.emit()
    }
}