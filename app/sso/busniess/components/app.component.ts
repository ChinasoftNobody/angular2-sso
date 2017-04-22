/**
 * Created by china on 2017/2/12.
 */
import {Component} from '@angular/core';
import {RemoteService} from "../../service/remote.service";
import {RequestUrl} from "../../const/request.url";
@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: '../views/app.html',
    providers:[RequestUrl]
})
export class AppComponent{
}
