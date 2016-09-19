"use strict";
var login_component_1 = require("./login/login.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'user/login', component: login_component_1.LoginComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map