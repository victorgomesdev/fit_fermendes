import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ClientRoutingModule } from "./client.rounting.module";
import { ClienteHomeComponent } from "./home/client-home.component";
import { ClientCardComponent } from "./client-card/client-card.component";
import { NoClientCardComponent } from "./no-client-card/no-client-card.component";
import { ClientDetails } from "./home/client-details/client-details.component";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  declarations: [
    ClienteHomeComponent,
    ClientCardComponent,
    NoClientCardComponent,
    ClientDetails
  ]
})
export class ClientModule {}