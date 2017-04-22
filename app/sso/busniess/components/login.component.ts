import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {LoginService} from "../../service/login.service";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {CookieKey} from "../../const/cookie.key";
import {NgLayer, NgLayerRef} from "../../../common/dialog/Dialog";
/**
 * Created by Administrator on 2017/4/9.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-login',
    templateUrl: '../views/login.html',
    styleUrls: ['../styles/login.css'],
    providers: [LoginService, NgLayer]
})
export class LoginComponent {

    userName;
    password;
    userNameError = false;
    passwordError = false;

    constructor(private loginService: LoginService,
                private cookie: CookieService,
                private ly: NgLayer,
                private vcRef: ViewContainerRef) {
    }

    /**
     * 点击登录事件
     */
    login() {
        this.userNameError = !(this.userName != '' && this.userName);
        this.passwordError = !(this.password != '' && this.password);
        if (this.userNameError || this.passwordError) {
            return;
        }
        this.loginService.login(this.userName, this.password, '').subscribe(data => this.loginCallback(data.json()));
    }

    /**
     * 登录结果处理
     * @param data 结果信息
     */
    private loginCallback(data) {
        let redirectToUrl = this.cookie.get(CookieKey.COOKIE_KEY_SSO_REDIRECT);
        if (data.status == 'ok') {
            this.cookie.put(CookieKey.COOKIE_KEY_SSO_TICKET, data.result);
            if (redirectToUrl) {
                window.location.href = redirectToUrl;
            } else {
                this.ly.alert({message: "There is no redirectUrl found."})
            }
        } else {
            this.ly.alert({title: 'Error', message: "Login error."})
        }

    }
}