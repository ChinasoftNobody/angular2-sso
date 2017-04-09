import {Component} from "@angular/core";
import {HeroService} from "../../service/HeroService";
import {LoginService} from "../../service/TestService";
/**
 * Created by Administrator on 2017/4/9.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-footer',
    templateUrl: '../views/footer.html',
    styleUrls: ['../styles/footer.css'],
    providers: [HeroService, LoginService]
})
export class FooterComponent{

}