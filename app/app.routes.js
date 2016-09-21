"use strict";
var login_component_1 = require("./login/login.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var routes = [
    { path: 'user', component: home_component_1.HomeComponent },
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: 'user/register', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: 'user/login' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map