import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ClientRoutingModule } from "./client.rounting.module";
import { ClienteHomeComponent } from "./home/client-home.component";
import { ClientCardComponent } from "./client-card/client-card.component";
import { NoClientCardComponent } from "./no-client-card/no-client-card.component";
import { ClientDetails } from "./home/client-details/client-details.component";
import { ClientRegistrationComponent } from "./registration/client-registration.component";
import { ClientComponent } from "./client.component";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  declarations: [
    ClientComponent,
    ClienteHomeComponent,
    ClientCardComponent,
    NoClientCardComponent,
    ClientDetails,
    ClientRegistrationComponent
  ]
})
export class ClientModule {}