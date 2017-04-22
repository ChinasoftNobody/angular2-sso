"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urls = [
    {
        name: 'login',
        path: 'http://localhost:8080/sso/login/'
    },
    {
        name: '',
        path: ''
    }
];
var serves = [
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
var RequestUrl = (function () {
    function RequestUrl() {
    }
    RequestUrl.prototype.getByName = function (serveName, interfaceName) {
        var serve = serves.find(function (value, index, obj) { return value.serveName == serveName; });
        return serve.urls.find(function (value, index, obj) { return value.name == interfaceName; }).path;
    };
    return RequestUrl;
}());
exports.RequestUrl = RequestUrl;
//# sourceMappingURL=request.url.js.map