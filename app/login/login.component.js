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
var services_module_1 = require("../services/services.module");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.error = '';
    }
    // ngOnInit() {
    //     this.authService.logout();
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.username, this.password)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/']);
                console.log(result);
            }
            else {
                _this.error = 'Username or password is incorrect';
                console.log(_this.error, result);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n        <div class=\"wrapper\">\n            <form (ngSubmit)=\"login()\" class=\"form-signin\">\n                <h2 class=\"form-signin-heading\">Please login</h2>\n                <br>\n                <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Email Address\" required=\"\" autofocus=\"\" />\n                <br>\n                <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\"/>\n                <br>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n            </form>\n        </div>\n    ",
            styles: ["\n        .wrapper {\t\n            margin-top: 30px;\n            margin-bottom: 80px;\n        }\n        .form-signin {\n            max-width: 380px;\n            padding: 15px 35px 45px;\n            margin: 0 auto;\n            background-color: #fff;\n            border: 1px solid rgba(0,0,0,0.1);\n            margin-bottom: 30px;\n        }\n        .form-control {\n            position: relative;\n            font-size: 16px;\n            height: auto;\n            padding: 10px;\n            box-sizing: border-box;\n        }\n        input[type=\"text\"] {\n            margin-bottom: -1px;\n            border-bottom-left-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        input[type=\"password\"] {\n            margin-bottom: 20px;\n            border-top-left-radius: 0;\n            border-top-right-radius: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_module_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map