import {Component} from "@angular/core";
import {HeroService} from "../../service/HeroService";
import {LoginService} from "../../service/TestService";
/**
 * Created by Administrator on 2017/4/9.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-login',
    templateUrl: '../views/login.html',
    styleUrls: ['../styles/login.css'],
    providers: [HeroService, LoginService]
})
export class LoginComponent {
    userName;
    password;
    userNameError = false;
    passwordError = false;

    constructor(private loginService: LoginService) {
    }

    login() {
        this.userNameError = !(this.userName != '' && this.userName);
        this.passwordError = !(this.password != '' && this.password);
        if (this.userNameError || this.passwordError) {
            return;
        }
        this.loginService.login(this.userName, this.password).subscribe(data => console.log(data.json()));
    }
}