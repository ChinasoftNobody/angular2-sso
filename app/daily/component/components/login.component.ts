import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../service/loginService";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {CookieKey} from "../../const/cookieKey";
/**
 * Created by Administrator on 2017/4/9.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-login',
    templateUrl: '../views/login.html',
    styleUrls: ['../styles/login.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        let ticket: string = this.cookie.get(CookieKey.COOKIE_KEY_SSO_TICKET);
        if (ticket) {
            this.loginService.login('', '', ticket).subscribe(data => this.loginCallback(data.json()));
        }
    }

    userName;
    password;
    userNameError = false;
    passwordError = false;

    constructor(private loginService: LoginService,
                private cookie: CookieService) {
    }

    /**
     * 点击登录时间
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
                console.error('url is empty');
            }
        } else {
            console.error(data.result);
        }

    }
}