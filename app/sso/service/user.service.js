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
var remote_service_1 = require("./remote.service");
var request_url_1 = require("../const/request.url");
/**
 * Created by Administrator on 2017/4/22.
 */
var UserService = (function () {
    function UserService(remote, url) {
        this.remote = remote;
        this.url = url;
    }
    UserService.prototype.addUser = function (user) {
        return this.remote.post(this.url.getByName('sso', 'addUser'), user, {});
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [remote_service_1.RemoteService, request_url_1.RequestUrl])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map