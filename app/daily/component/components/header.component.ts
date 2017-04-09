import {HeroService} from "../../service/HeroService";
import {LoginService} from "../../service/TestService";
import {Component} from "@angular/core";
/**
 * Created by Administrator on 2017/4/9.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-header',
    templateUrl: '../views/header.html',
    styleUrls: ['../styles/header.css'],
    providers: [HeroService, LoginService]
})
export class HeaderComponent{

}