import { Component, ComponentRef, inject, input, OnDestroy, OnInit, output } from "@angular/core";
import { AlertEnum } from "@shared/enums/alert.enum";

@Component({
    templateUrl: './alert.message.component.html',
    selector: 'alert-message',
    standalone: false
})
export class AlertMessageComponent implements OnInit, OnDestroy {

    selfRef = inject(ComponentRef<AlertMessageComponent>)
    type = input<AlertEnum>(AlertEnum.ERROR)
    message = input('')
    index = input<number>(0)
    title!: string

    timeout!: any

    expired = output<number>()

    ngOnInit(): void {
        this.title = this.type()
        this.timeout = setTimeout(()=> this.selfRef.destroy() , 3000)
    }

    ngOnDestroy(): void {
        clearTimeout(this.timeout)
    }
}