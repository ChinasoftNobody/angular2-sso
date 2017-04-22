import {Component} from "@angular/core";
/**
 * Created by Administrator on 2017/4/20.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-sign-up',
    templateUrl: '../views/signUp.html',
    styleUrls: [],
    providers: []
})
export class SignUpComponent {
    user: any = {
        userName: '',
        password: '',
        email: ''
    };

    signUp() {
        console.log(this.user);
    }
}