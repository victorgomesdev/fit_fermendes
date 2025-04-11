import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "@shared/shared.module";
import { SessionsModule } from "@sessions/sessions.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        SharedModule,
        SessionsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }