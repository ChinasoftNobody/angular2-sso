/**
 * Created by china on 2017/2/12.
 */
import {Component} from '@angular/core';
import {RemoteService} from "../../service/RemoteService";
import {RequestUrl} from "../../const/requestUrl";
@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: '../views/app.html',
    providers:[RemoteService,RequestUrl]
})
export class AppComponent{
}
