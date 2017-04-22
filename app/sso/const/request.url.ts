import {RemoteServe} from "../bean/remote.serve";
import {Url} from "../bean/url";
const urls :Url[] = [
    {
        name:'login',
        path:'http://localhost:8080/sso/login/'
    },
    {
        name:'',
        path:''
    }
];
const serves: RemoteServe[] = [
    {
        serveName: 'sso',
        urls: [
            {
                name: 'login',
                path: 'http://localhost:8080/sso/login/'
            },
            {
                name: '',
                path: ''
            }
        ]
    }
];
export class RequestUrl {
    getByName(serveName: string, interfaceName: string): string {
        let serve:RemoteServe = serves.find((value, index, obj) => value.serveName == serveName);
        return serve.urls.find((value, index, obj) => value.name == interfaceName).path;
    }
}