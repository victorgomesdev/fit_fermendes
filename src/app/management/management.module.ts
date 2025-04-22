import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ManagementRoutingModule } from "./management.routing.module";
import { ManagementHomeComponent } from "./management-home/management-home.component";
import { EditCategoryComponent } from "./edit-category/edit-catyegory.component";
import { ConfigurationsComponent } from "./configurations/configurations.component";
import { NewUserComponent } from "./new-user/new-user.component";

@NgModule({
    imports: [
        ManagementRoutingModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        ManagementHomeComponent,
        EditCategoryComponent,
        ConfigurationsComponent,
        NewUserComponent
    ]
})
export class ManagementModule { }