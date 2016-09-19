import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";

@NgModule({})

export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [AuthService, UserService]
        }
    }
}

export {
    AuthService,
    UserService
}