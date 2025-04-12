import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
    imports: [RouterModule]
})
export class SharedModule { }