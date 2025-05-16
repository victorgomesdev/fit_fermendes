import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from 'ngx-spinner'
import { AlertComponent } from "@components/alert/alert.component";
import { LayoutComponent } from "@components/layout/layout.component";
import { LoadingComponent } from "@components/loading/loading.component";
import { DateFormatPipe } from "./pipes/date-format.pipe";
import { AutofocusDirective } from "./directives/autofocus.directive";
import { DateToAgePipe } from "./pipes/date-to-age.pipe";
import { ClientsPipe } from "./pipes/extract-clients.pipe";

@NgModule({
    declarations: [
        LayoutComponent,
        DateFormatPipe,
        AutofocusDirective,
        AlertComponent,
        DateToAgePipe,
        LoadingComponent,
        ClientsPipe
    ],
    exports: [
        LayoutComponent,
        DateFormatPipe,
        AutofocusDirective,
        AlertComponent,
        DateToAgePipe,
        ClientsPipe
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgxSpinnerModule
    ]
})
export class SharedModule { }