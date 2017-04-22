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
var login_service_1 = require("../../service/login.service");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var cookie_key_1 = require("../../const/cookie.key");
var Dialog_1 = require("../../../common/dialog/Dialog");
var sign_contact_service_1 = require("../../service/sign.contact.service");
/**
 * Created by Administrator on 2017/4/9.
 */
var LoginComponent = (function () {
    function LoginComponent(loginService, cookie, ly, vcRef, signContact) {
        this.loginService = loginService;
        this.cookie = cookie;
        this.ly = ly;
        this.vcRef = vcRef;
        this.signContact = signContact;
        this.userName = this.signContact.user.name;
        this.password = this.signContact.user.password;
        this.userNameError = false;
        this.passwordError = false;
    }
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
        var redirectToUrl = this.cookie.get(cookie_key_1.CookieKey.COOKIE_KEY_SSO_REDIRECT);
        if (data.status == 'ok') {
            this.cookie.put(cookie_key_1.CookieKey.COOKIE_KEY_SSO_TICKET, data.result);
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
        providers: [login_service_1.LoginService, Dialog_1.NgLayer, sign_contact_service_1.SignContactService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        cookies_service_1.CookieService,
        Dialog_1.NgLayer,
        core_1.ViewContainerRef, sign_contact_service_1.SignContactService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map