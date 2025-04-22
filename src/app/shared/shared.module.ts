import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";
import { DateFormatPipe } from "./pipes/date-format.pipe";
import { AutofocusDirective } from "./directives/autofocus.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LayoutComponent,
        DateFormatPipe,
        AutofocusDirective
    ],
    exports: [
        LayoutComponent,
        DateFormatPipe,
        AutofocusDirective
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})
export class SharedModule { }