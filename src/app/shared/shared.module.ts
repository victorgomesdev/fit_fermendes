import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "@components/layout/layout.component";

@NgModule({
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
    imports: [RouterModule]
})
export class SharedModule {}