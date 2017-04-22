/**
 * Created by china on 2017/2/12.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './sso/busniess/components/app.component';
import {FormsModule}   from '@angular/forms';
import {AppRouterModule} from "./app.router";
import {MainComponent} from "./sso/busniess/components/main.component";
import {HttpModule} from "@angular/http";
import {HeaderComponent} from "./sso/busniess/components/header.component";
import {LoginComponent} from "./sso/busniess/components/login.component";
import {FooterComponent} from "./sso/busniess/components/footer.component";
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {RemoteService} from "./sso/service/remote.service";
import {SignUpComponent} from "./sso/busniess/components/signUp.component";
import {RequestUrl} from "./sso/const/request.url";
@NgModule({
    imports: [BrowserModule, FormsModule, AppRouterModule, HttpModule],
    declarations: [AppComponent, MainComponent, HeaderComponent, LoginComponent, FooterComponent, SignUpComponent],
    providers: [CookieService, RemoteService, RequestUrl],
    bootstrap: [AppComponent]
})
export class AppModule {
}


