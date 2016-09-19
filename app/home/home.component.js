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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var user_service_1 = require("../services/user.service");
var HomeComponent = (function () {
    function HomeComponent(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.areSomeUsers = false;
    }
    HomeComponent.prototype.logout = function () {
        // this.areSomeUsers = false;
        this.authService.logout();
        this.router.navigate(['/user/login']);
    };
    HomeComponent.prototype.getUsers = function () {
        var _this = this;
        this.areSomeUsers = true;
        this.userService.getUsers()
            .subscribe(function (res) {
            _this.users = res;
            console.log(_this.users);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n        <div class=\"wrapper\">\n            <h1>Welcome Username</h1>\n            <div *ngIf=\"areSomeUsers\">\n                <ul *ngFor=\"let user of users\">\n                    <li>ID: {{user.id}}</li>\n                    <li>Name: {{user.name}}</li>\n                    <li>Age: {{user.age}}</li>\n                    <li>City: {{user.city}}</li>\n                </ul>\n            </div>\n            <button (click)=\"getUsers()\" class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Get Users</button>\n            <button (click)=\"logout()\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Logout</button>\n        </div>\n    ",
            styles: ["\n        .wrapper {\t\n            margin-bottom: 80px;       \n            max-width: 400px;\n            padding: 15px 35px 45px;\n            margin: 0 auto;\n            background-color: #fff;\n            border: 1px solid rgba(0,0,0,0.1);\n            margin-top: 30px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, user_service_1.UserService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map