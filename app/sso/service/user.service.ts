import {Injectable} from "@angular/core";
import {RemoteService} from "./remote.service";
import {RequestUrl} from "../const/request.url";
/**
 * Created by Administrator on 2017/4/22.
 */
@Injectable()
export class UserService{
    constructor(private remote:RemoteService,private url:RequestUrl){}

    addUser(user:any){
        return this.remote.post(this.url.getByName('sso','addUser'),user,{});
    }
}