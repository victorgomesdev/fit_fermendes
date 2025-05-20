import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PublicRoutingModule } from "./public.routing.module";
import { PublicComponet } from "./public.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    PublicComponet,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    PublicRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PublicModule {}