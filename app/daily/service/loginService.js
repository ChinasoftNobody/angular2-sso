"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RemoteService_1 = require("./RemoteService");
var requestUrl_1 = require("../const/requestUrl");
/**
 * Created by Administrator on 2017/3/29.
 */
var LoginService = (function () {
    function LoginService(remote, requestUrl) {
        this.remote = remote;
        this.requestUrl = requestUrl;
    }
    LoginService.prototype.login = function (userName, password, ticket) {
        var url = this.requestUrl.getByName('login');
        return this.remote.post(url, {
            userName: userName,
            password: password,
            ticketId: ticket
        }, {});
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [RemoteService_1.RemoteService, requestUrl_1.RequestUrl])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=loginService.js.map