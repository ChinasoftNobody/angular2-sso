"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by china on 2017/2/12.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./sso/busniess/components/app.component");
var forms_1 = require("@angular/forms");
var app_router_1 = require("./app.router");
var main_component_1 = require("./sso/busniess/components/main.component");
var http_1 = require("@angular/http");
var header_component_1 = require("./sso/busniess/components/header.component");
var login_component_1 = require("./sso/busniess/components/login.component");
var footer_component_1 = require("./sso/busniess/components/footer.component");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var remote_service_1 = require("./sso/service/remote.service");
var signUp_component_1 = require("./sso/busniess/components/signUp.component");
var request_url_1 = require("./sso/const/request.url");
var Dialog_1 = require("./common/dialog/Dialog");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_router_1.AppRouterModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, main_component_1.MainComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, footer_component_1.FooterComponent, signUp_component_1.SignUpComponent],
        providers: [cookies_service_1.CookieService, remote_service_1.RemoteService, request_url_1.RequestUrl, Dialog_1.NgLayer],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map