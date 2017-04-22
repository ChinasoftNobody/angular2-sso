"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serves = [
    {
        serveName: 'sso',
        host: 'http://192.168.1.7:8081/sso',
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
var RequestUrl = (function () {
    function RequestUrl() {
    }
    RequestUrl.prototype.getByName = function (serveName, interfaceName) {
        var serve = serves.find(function (value, index, obj) { return value.serveName == serveName; });
        return serve.host + serve.urls.find(function (value, index, obj) { return value.name == interfaceName; }).path;
    };
    return RequestUrl;
}());
exports.RequestUrl = RequestUrl;
//# sourceMappingURL=request.url.js.map