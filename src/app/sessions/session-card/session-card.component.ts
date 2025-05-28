import { Component, input, output } from "@angular/core";
import { Colors } from "@shared/enums/colors.enum";
import { Session } from "@shared/types/session.type";

@Component({
    templateUrl: './session-card.component.html',
    selector: 'session-card',
    standalone: false
})
export class SessionCardComponet {

    session = input<Session>()
    selected = output<Session>()

    colors = Colors
    
    clicked() {
        this.selected.emit(this.session() as Session)
    }
}