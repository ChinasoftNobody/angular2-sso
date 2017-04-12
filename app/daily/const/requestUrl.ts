import {Url} from "../bean/url";
const urls :Url[] = [
    {
        name:'login',
        path:'http://192.168.1.7:8080/sso/login/'
    },
    {
        name:'',
        path:''
    }
];
export class RequestUrl{
    getByName(name:string):string{
        return urls.find((value, index, obj)=> value.name == name).path;
    }
}