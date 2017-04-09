import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs} from "@angular/http";
@Injectable()
export class RemoteService {
    constructor(private http: Http) {
    }

    get(url: string, option: RequestOptionsArgs) {
        return this.http.get(url,option);
    }

    post(url:string,body:any,option:RequestOptionsArgs){
        return this.http.post(url,body,option);
    }
}