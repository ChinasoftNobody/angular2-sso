import {Component} from "@angular/core";
import {HeroService} from "../../service/HeroService";
import {TestService} from "../../service/TestService";
/**
 * Created by Administrator on 2017/3/29.
 */
@Component({
    moduleId: module.id,
    selector: 'app-main',
    templateUrl: '../views/main.html',
    styleUrls: ['../styles/main.css'],
    providers: [HeroService, TestService]
})
export class MainComponent{

}