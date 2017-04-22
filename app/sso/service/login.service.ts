import {Injectable} from "@angular/core";
import {RemoteService} from "./remote.service";
import {RequestUrl} from "../const/request.url";
import {SignContactService} from "./sign.contact.service";
/**
 * Created by Administrator on 2017/3/29.
 */
@Injectable()
export class LoginService {
    constructor(private remote: RemoteService, private requestUrl: RequestUrl) {
    }

    login(userName: string, password: string, ticket: string) {
        let url:string = this.requestUrl.getByName('sso','login');
        return this.remote.post(url, {
            userName: userName,
            password: password,
            ticketId: ticket
        }, {})
    }
}