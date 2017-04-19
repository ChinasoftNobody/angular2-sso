"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loginService_1 = require("../../service/loginService");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var cookieKey_1 = require("../../const/cookieKey");
var Dialog_1 = require("../../../common/dialog/Dialog");
/**
 * Created by Administrator on 2017/4/9.
 */
var LoginComponent = (function () {
    function LoginComponent(loginService, cookie, ly, vcRef) {
        this.loginService = loginService;
        this.cookie = cookie;
        this.ly = ly;
        this.vcRef = vcRef;
        this.userNameError = false;
        this.passwordError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ticket = this.cookie.get(cookieKey_1.CookieKey.COOKIE_KEY_SSO_TICKET);
        if (ticket) {
            this.loginService.login('', '', ticket).subscribe(function (data) { return _this.loginCallback(data.json()); });
        }
    };
    /**
     * 点击登录事件
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userNameError = !(this.userName != '' && this.userName);
        this.passwordError = !(this.password != '' && this.password);
        if (this.userNameError || this.passwordError) {
            return;
        }
        this.loginService.login(this.userName, this.password, '').subscribe(function (data) { return _this.loginCallback(data.json()); });
    };
    /**
     * 登录结果处理
     * @param data 结果信息
     */
    LoginComponent.prototype.loginCallback = function (data) {
        var redirectToUrl = this.cookie.get(cookieKey_1.CookieKey.COOKIE_KEY_SSO_REDIRECT);
        if (data.status == 'ok') {
            this.cookie.put(cookieKey_1.CookieKey.COOKIE_KEY_SSO_TICKET, data.result);
            if (redirectToUrl) {
                window.location.href = redirectToUrl;
            }
            else {
                this.ly.alert({ message: "There is no redirectUrl found." });
            }
        }
        else {
            this.ly.alert({ title: 'Error', message: "Login error." });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sso-login',
        templateUrl: '../views/login.html',
        styleUrls: ['../styles/login.css'],
        providers: [loginService_1.LoginService, Dialog_1.NgLayer]
    }),
    __metadata("design:paramtypes", [loginService_1.LoginService,
        cookies_service_1.CookieService,
        Dialog_1.NgLayer,
        core_1.ViewContainerRef])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map