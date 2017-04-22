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
var Dialog_1 = require("../../../common/dialog/Dialog");
var user_service_1 = require("../../service/user.service");
var router_1 = require("@angular/router");
/**
 * Created by Administrator on 2017/4/20.
 */
var SignUpComponent = (function () {
    function SignUpComponent(ly, userService, router) {
        this.ly = ly;
        this.userService = userService;
        this.router = router;
        this.user = {
            name: '',
            password: '',
            email: ''
        };
    }
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.addUser(this.user).subscribe(function (data) { return _this.signUpCallback(data.json()); });
    };
    SignUpComponent.prototype.signUpCallback = function (data) {
        if (data.status == 'ok') {
            this.ly.tip({ message: 'Sign up success' });
            this.router.navigate(['/signIn']);
            return;
        }
        this.ly.alert({ message: data.result });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sso-sign-up',
        templateUrl: '../views/signUp.html',
        styleUrls: [],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [Dialog_1.NgLayer, user_service_1.UserService, router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signUp.component.js.map