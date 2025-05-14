import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "@components/alert/alert.component";
import { LayoutComponent } from "@components/layout/layout.component";
import { DateFormatPipe } from "./pipes/date-format.pipe";
import { AutofocusDirective } from "./directives/autofocus.directive";
import { DateToAgePipe } from "./pipes/date-to-age.pipe";

@NgModule({
    declarations: [
        LayoutComponent,
        DateFormatPipe,
        AutofocusDirective,
        AlertComponent,
        DateToAgePipe
    ],
    exports: [
        LayoutComponent,
        DateFormatPipe,
        AutofocusDirective,
        AlertComponent,
        DateToAgePipe
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})
export class SharedModule { }