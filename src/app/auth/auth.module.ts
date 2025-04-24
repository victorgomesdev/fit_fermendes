import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth.routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }