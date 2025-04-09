import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./app/shared/shared.module";

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, SharedModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}