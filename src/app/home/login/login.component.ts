import { Component } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

@Component({
  templateUrl: './login.component.html',
  selector: 'login',
  imports: [SharedModule]
})
export class LoginComponent { }