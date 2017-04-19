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
var RequestUrl = (function () {
    function RequestUrl() {
    }
    RequestUrl.prototype.getByName = function (name) {
        return urls.find(function (value, index, obj) { return value.name == name; }).path;
    };
    return RequestUrl;
}());
exports.RequestUrl = RequestUrl;
//# sourceMappingURL=requestUrl.js.map