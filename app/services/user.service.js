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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var auth_service_1 = require("./auth.service");
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getUsers = function () {
        var token = localStorage.getItem('loggedUser');
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        // console.log(headers);
        var options = new http_1.RequestOptions({ headers: headers });
        // console.log(options);
        return this.http
            .get('/user', options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.addUser = function (id, name, age, city) {
        var token = localStorage.getItem('loggedUser');
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post('/user/add', JSON.stringify({ id: id, name: name, age: age, city: city }), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.editUser = function (id, name, age, city) {
        var token = localStorage.getItem('loggedUser');
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        headers.append('Content-Type', 'application/json');
        return this.http
            .put('/user', JSON.stringify({ id: id, name: name, age: age, city: city }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        // console.log(id);
        var token = localStorage.getItem('loggedUser');
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        headers.append('Content-Type', 'application/json');
        return this.http
            .delete('/user/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map