import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes = [
    {path: '', component: HomeComponent},
    {path: 'user/login', component: LoginComponent}
];

export default RouterModule.forRoot(routes);