import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import pt from '@angular/common/locales/pt'
import { SharedModule } from "@shared/shared.module";
import { SessionsModule } from "@sessions/sessions.module";
import { ClientModule } from "@client/client.module"
import { AuthModule } from "@auth/auth.module";
import { ManagementModule } from "@management/management.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home-component";
import { AppRoutingModule } from "./app.routing.module";

registerLocaleData(pt)

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ClientModule,
        SharedModule,
        SessionsModule,
        ManagementModule,
        AuthModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }