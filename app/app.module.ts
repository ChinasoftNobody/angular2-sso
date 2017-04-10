/**
 * Created by china on 2017/2/12.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './daily/component/components/app.component';
import {FormsModule}   from '@angular/forms';
import {AppRouterModule} from "./app.router";
import {MainComponent} from "./daily/component/components/main.component";
import {HttpModule} from "@angular/http";
import {HeaderComponent} from "./daily/component/components/header.component";
import {LoginComponent} from "./daily/component/components/login.component";
import {FooterComponent} from "./daily/component/components/footer.component";
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {RemoteService} from "./daily/service/RemoteService";
@NgModule({
    imports: [BrowserModule, FormsModule, AppRouterModule, HttpModule],
    declarations: [AppComponent, MainComponent, HeaderComponent, LoginComponent, FooterComponent],
    providers: [CookieService,RemoteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


