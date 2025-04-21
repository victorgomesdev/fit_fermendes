import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ManagementRoutingModule } from "./management.routing.module";
import { ManagementHomeComponent } from "./management-home/management-home.component";

@NgModule({
    imports: [
        ManagementRoutingModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        ManagementHomeComponent
    ]
})
export class ManagementModule { }