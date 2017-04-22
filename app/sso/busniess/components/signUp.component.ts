import {Component} from "@angular/core";
import {NgLayer} from "../../../common/dialog/Dialog";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
/**
 * Created by Administrator on 2017/4/20.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-sign-up',
    templateUrl: '../views/signUp.html',
    styleUrls: [],
    providers: [UserService]
})
export class SignUpComponent {
    constructor(private ly: NgLayer, private userService: UserService,private router:Router) {
    }

    user: any = {
        name: '',
        password: '',
        email: ''
    };

    signUp() {
        this.userService.addUser(this.user).subscribe(data => this.signUpCallback(data.json()) );
    }

    private signUpCallback(data:any){
        if(data.status == 'ok'){
            this.ly.tip({message:'Sign up success'});
            this.router.navigate(['/signIn']);
            return;
        }
        this.ly.alert({message: data.result});
    }
}