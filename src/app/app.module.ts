import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "@shared/shared.module";
import { SessionsModule } from "@sessions/sessions.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        SessionsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }