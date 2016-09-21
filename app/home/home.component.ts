import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
@Component({
    selector: 'home',
    template: `
        <div class="wrapper">
            <h1 class="text-center">Welcome {{ username }}</h1>
            <div class="inputInfo">                
                <div class="input-group">
                  <span class="input-group-addon" id="sizing-addon2"></span>
                  <input [(ngModel)]="id" type="text" class="form-control" placeholder="Id" aria-describedby="sizing-addon2">
                  <input [(ngModel)]="name" type="text" class="form-control" placeholder="Name" aria-describedby="sizing-addon2">
                  <input [(ngModel)]="age" type="text" class="form-control" placeholder="Age" aria-describedby="sizing-addon2">
                  <input [(ngModel)]="city" type="text" class="form-control" placeholder="City" aria-describedby="sizing-addon2">
                </div>
            </div>
            <div class="action">                
                <button (click)="editUser()" type="button" class="btn btn-lg btn-warning btn-block">UPDATE USER</button>
                <button (click)="addUser()" class="btn btn-lg btn-info btn-block" type="submit">ADD USER</button>
                <button (click)="getUsers()" class="btn btn-lg btn-success btn-block" type="submit">GET USERS</button>
                <button (click)="logout()" class="btn btn-lg btn-primary btn-block" type="submit">LOGOUT</button>
            </div>
            
        </div>
        <div class="clear"></div>
        <div *ngIf="areSomeUsers" class="usersDiv">
            <ul *ngFor="let user of users" class="list-group usersUl">
              <li class="list-group-item">
                  <h3>
                    Name: {{user.name}}
                  <button (click)="deleteUser(user.id)" type="button" class="btn btn-danger">DELETE</button>
                  </h3>
              </li>
              <li class="list-group-item">ID: {{user.id}}</li>
              <li class="list-group-item">Age: {{user.age}}</li>
              <li class="list-group-item">City: {{user.city}}</li>
            </ul>
        </div>
            
    `,
    styles: [`
        .wrapper {            
            margin: 0 auto;
            width: 600px;
        }
        .inputInfo {	
            float: left;
            margin-bottom: 80px;       
            max-width: 400px;
            padding: 15px 35px 45px;
            margin: 0 auto;
            border: 1px solid rgba(0,0,0,0.1);
            margin-top: 30px;
            background-color: #fff;
        }
        .action {
            float: left;
            max-width: 400px;
            margin: 30px 5px;
        }
        .input-group {
            border-radius: 5px;
        }
        .usersUl {
            float: left;
            margin: 5px;
        }
        .usersDiv {
            margin: 20px auto;
        }
        .clear {
            clear: both;
        }
    `]
})
export class HomeComponent {
    id: number;
    name: string;
    age: number;
    city: string;
    areSomeUsers = false;
    users;
    username = this.authService.username;
    constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

    // loggedIn = this.authService.isLoggedIn;

    logout() {
        this.areSomeUsers = false;
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

    addUser() {
        this.userService.addUser(this.id, this.name, this.age, this.city)
            .subscribe(res => {
                console.log(res);
            });
        this.name ='';
        this.age = null;
        this.city = '';
        this.getUsers();
        // console.log(this.name, this.age, this.city);
    }

    editUser() {
        this.userService.editUser(this.id, this.name, this.age, this.city)
            .subscribe(res => {
                console.log(res);
            });
        this.getUsers();
    }

    deleteUser(id) {
        this.userService.deleteUser(id)
            .subscribe(res => {
                console.log(res);
            });
        this.getUsers();
    }

}
