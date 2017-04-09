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
/**
 * Created by Administrator on 2017/3/29.
 */
var TestService = (function () {
    function TestService(remote) {
        this.remote = remote;
    }
    TestService.prototype.getMessage = function () {
        // return this.remote.get("http://localhost:8080/daily/test/test1",{});
        return this.remote.post("http://localhost:8080/daily/test/test2", { name: "liguanghao" }, {});
    };
    return TestService;
}());
TestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [RemoteService_1.RemoteService])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=TestService.js.map