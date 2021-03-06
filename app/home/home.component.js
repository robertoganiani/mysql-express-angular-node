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
        this.username = this.authService.username;
    }
    // loggedIn = this.authService.isLoggedIn;
    HomeComponent.prototype.logout = function () {
        this.areSomeUsers = false;
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
    HomeComponent.prototype.addUser = function () {
        this.userService.addUser(this.id, this.name, this.age, this.city)
            .subscribe(function (res) {
            console.log(res);
        });
        this.name = '';
        this.age = null;
        this.city = '';
        this.getUsers();
        // console.log(this.name, this.age, this.city);
    };
    HomeComponent.prototype.editUser = function () {
        this.userService.editUser(this.id, this.name, this.age, this.city)
            .subscribe(function (res) {
            console.log(res);
        });
        this.getUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        this.userService.deleteUser(id)
            .subscribe(function (res) {
            console.log(res);
        });
        this.getUsers();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n        <div class=\"wrapper\">\n            <h1 class=\"text-center\">Welcome {{ username }}</h1>\n            <div class=\"inputInfo\">                \n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\" id=\"sizing-addon2\"></span>\n                  <input [(ngModel)]=\"id\" type=\"text\" class=\"form-control\" placeholder=\"Id\" aria-describedby=\"sizing-addon2\">\n                  <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" aria-describedby=\"sizing-addon2\">\n                  <input [(ngModel)]=\"age\" type=\"text\" class=\"form-control\" placeholder=\"Age\" aria-describedby=\"sizing-addon2\">\n                  <input [(ngModel)]=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City\" aria-describedby=\"sizing-addon2\">\n                </div>\n            </div>\n            <div class=\"action\">                \n                <button (click)=\"editUser()\" type=\"button\" class=\"btn btn-lg btn-warning btn-block\">UPDATE USER</button>\n                <button (click)=\"addUser()\" class=\"btn btn-lg btn-info btn-block\" type=\"submit\">ADD USER</button>\n                <button (click)=\"getUsers()\" class=\"btn btn-lg btn-success btn-block\" type=\"submit\">GET USERS</button>\n                <button (click)=\"logout()\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">LOGOUT</button>\n            </div>\n            \n        </div>\n        <div class=\"clear\"></div>\n        <div *ngIf=\"areSomeUsers\" class=\"usersDiv\">\n            <ul *ngFor=\"let user of users\" class=\"list-group usersUl\">\n              <li class=\"list-group-item\">\n                  <h3>\n                    Name: {{user.name}}\n                  <button (click)=\"deleteUser(user.id)\" type=\"button\" class=\"btn btn-danger\">DELETE</button>\n                  </h3>\n              </li>\n              <li class=\"list-group-item\">ID: {{user.id}}</li>\n              <li class=\"list-group-item\">Age: {{user.age}}</li>\n              <li class=\"list-group-item\">City: {{user.city}}</li>\n            </ul>\n        </div>\n    ",
            styles: ["\n        .wrapper {            \n            margin: 0 auto;\n            width: 600px;\n        }\n        .inputInfo {\t\n            float: left;\n            margin-bottom: 80px;       \n            max-width: 400px;\n            padding: 15px 35px 45px;\n            margin: 0 auto;\n            border: 1px solid rgba(0,0,0,0.1);\n            margin-top: 30px;\n            background-color: #fff;\n        }\n        .action {\n            float: left;\n            max-width: 400px;\n            margin: 30px 5px;\n        }\n        .input-group {\n            border-radius: 5px;\n        }\n        .usersUl {\n            float: left;\n            margin: 5px;\n        }\n        .usersDiv {\n            margin: 20px auto;\n        }\n        .clear {\n            clear: both;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, user_service_1.UserService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map