import {Injectable} from "@angular/core";
import {RemoteService} from "./RemoteService";
import {RequestUrl} from "../const/requestUrl";
/**
 * Created by Administrator on 2017/3/29.
 */
@Injectable()
export class LoginService {
    constructor(private remote: RemoteService, private requestUrl: RequestUrl) {
    }

    login(userName: string, password: string, ticket: string) {
        let url:string = this.requestUrl.getByName('login');
        return this.remote.post(url, {
            userName: userName,
            password: password,
            ticketId: ticket
        }, {})
    }
}