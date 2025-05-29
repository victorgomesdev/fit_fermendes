import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ClientRoutingModule } from "./client.rounting.module";
import { ClienteHomeComponent } from "./home/client-home.component";
import { ClientDetails } from "./home/client-details/client-details.component";
import { ClientRegistrationComponent } from "./registration/client-registration.component";
import { ClientComponent } from "./client.component";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientComponent,
    ClienteHomeComponent,
    ClientDetails,
    ClientRegistrationComponent
  ]
})
export class ClientModule {}