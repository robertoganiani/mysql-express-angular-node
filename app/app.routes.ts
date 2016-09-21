import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";

const routes = [
    {path: 'user', component: HomeComponent},
    {path: 'user/login', component: LoginComponent},
    {path: 'user/register', component: RegisterComponent},

    {path: '**', redirectTo: 'user/login'}
];

export default RouterModule.forRoot(routes);