import { Component } from '@angular/core';
import {AuthService, UserService} from "../services/services.module";
import {Router} from "@angular/router";
import {Http} from "@angular/http";


@Component({
    selector: 'login',
    template: `
        <div class="wrapper">
            <form (ngSubmit)="login()" class="form-signin">
                <h2 class="form-signin-heading">Please login</h2>
                <br>
                <input [(ngModel)]="username" type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                <br>
                <input [(ngModel)]="password" type="password" class="form-control" name="password" placeholder="Password" required=""/>
                <br>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
        </div>
    `,
    styles: [`
        .wrapper {	
            margin-top: 30px;
            margin-bottom: 80px;
        }
        .form-signin {
            max-width: 380px;
            padding: 15px 35px 45px;
            margin: 0 auto;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        .form-control {
            position: relative;
            font-size: 16px;
            height: auto;
            padding: 10px;
            box-sizing: border-box;
        }
        input[type="text"] {
            margin-bottom: -1px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        input[type="password"] {
            margin-bottom: 20px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    `]
})
export class LoginComponent {
    // loginData = {};
    username: string;
    password: string;
    error = '';

    constructor(private router: Router,  private authService: AuthService) {}

    // ngOnInit() {
    //     this.authService.logout();
    // }

    login() {
        this.authService.login(this.username, this.password)
            .subscribe(result => {
                if (result) {
                    this.router.navigate(['/']);
                    console.log(result);
                } else {
                    this.error = 'Username or password is incorrect';
                    console.log(this.error, result);
                }
            });
    }

}
