"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Administrator on 2017/3/29.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signUp_component_1 = require("./sso/busniess/components/signUp.component");
var login_component_1 = require("./sso/busniess/components/login.component");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'signIn', redirectTo: '' },
    { path: 'signUp', component: signUp_component_1.SignUpComponent }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRouterModule);
exports.AppRouterModule = AppRouterModule;
//# sourceMappingURL=app.router.js.map