import {Injectable} from "@angular/core";
import {RemoteService} from "./RemoteService";
/**
 * Created by Administrator on 2017/3/29.
 */
@Injectable()
export class TestService {
    constructor(private remote:RemoteService){}
    getMessage() {
        // return this.remote.get("http://localhost:8080/daily/test/test1",{});
        return this.remote.post("http://localhost:8080/daily/test/test2",{name:"liguanghao"},{});
    }
}