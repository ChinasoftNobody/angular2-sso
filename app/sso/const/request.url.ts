import {RemoteServe} from "../bean/remote.serve";
const serves: RemoteServe[] = [
    {
        serveName: 'sso',
        host:'http://localhost:8080/sso',
        urls: [
            {
                name: 'login',
                path: '/login/'
            },
            {
                name: 'addUser',
                path: '/user/add'
            }
        ]
    }
];
export class RequestUrl {
    getByName(serveName: string, interfaceName: string): string {
        let serve:RemoteServe = serves.find((value, index, obj) => value.serveName == serveName);
        return serve.host + serve.urls.find((value, index, obj) => value.name == interfaceName).path;
    }
}