import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";
import { DateFormatPipe } from "./pipes/date-format.pipe";

@NgModule({
    declarations: [LayoutComponent, DateFormatPipe],
    exports: [LayoutComponent, DateFormatPipe],
    imports: [RouterModule]
})
export class SharedModule { }