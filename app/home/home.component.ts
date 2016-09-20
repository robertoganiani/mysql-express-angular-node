import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
@Component({
    selector: 'home',
    template: `
        <div class="wrapper">
            <h1>Welcome Username</h1>
            <div *ngIf="areSomeUsers">
                <ul *ngFor="let user of users">
                    <h2>Name: {{ user.name }}</h2>
                    <li>ID: {{ user.id }}</li>
                    <li>Age: {{ user.age }}</li>
                    <li>City: {{ user.city }}</li>
                </ul>
            </div>
            <button (click)="getUsers()" class="btn btn-lg btn-success btn-block" type="submit">Get Users</button>
            <button (click)="logout()" class="btn btn-lg btn-primary btn-block" type="submit">Logout</button>
        </div>
    `,
    styles: [`
        .wrapper {	
            margin-bottom: 80px;       
            max-width: 400px;
            padding: 15px 35px 45px;
            margin: 0 auto;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,0.1);
            margin-top: 30px;
        }
    `]
})
export class HomeComponent {
    areSomeUsers = false;
    users;
    constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

    logout() {
        // this.areSomeUsers = false;
        this.authService.logout();
        this.router.navigate(['/user/login']);
    }

    getUsers() {
        this.areSomeUsers = true;
        this.userService.getUsers()
            .subscribe(res => {
                this.users = res;
                console.log(this.users);
            });

    }

}
