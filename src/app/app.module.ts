import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import pt from '@angular/common/locales/pt'
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { apiAuthenticationInterceptor } from "@shared/interceptors/api-authentication.interceptor";
import { SessionsModule } from "@sessions/sessions.module";
import { ManagementModule } from "@management/management.module";
import { ClientModule } from "@client/client.module"
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";

registerLocaleData(pt)

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ClientModule,
        SharedModule,
        SessionsModule,
        ManagementModule,
        RouterModule,
        ToastrModule.forRoot({
            progressBar: true,
            progressAnimation: 'decreasing',
            timeOut: 3000,
            closeButton: true,
        })
    ],
    bootstrap: [AppComponent],
    providers: [
        provideHttpClient(
            withInterceptors([
                apiAuthenticationInterceptor
            ])
        )
    ]
})
export class AppModule { }