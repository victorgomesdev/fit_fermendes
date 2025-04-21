import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import pt from '@angular/common/locales/pt'
import { SharedModule } from "@shared/shared.module";
import { SessionsModule } from "@sessions/sessions.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { ClientModule } from "./client/client.module";
import { ManagementModule } from "./management/management.module";

registerLocaleData(pt)

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ClientModule,
        SharedModule,
        SessionsModule,
        ManagementModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }