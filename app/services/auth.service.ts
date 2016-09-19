import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    private loggedIn = false;
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('loggedUser');
    }

    login(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                '/user/login',
                JSON.stringify({ username, password }),
                { headers }
            )
            // .map(res => res.json())
            .map((res) => {
                if (res.status === 200) {
                    localStorage.setItem('loggedUser', res._body);
                    this.loggedIn = true;
                    console.log(res);
                }
                return this.loggedIn;
            });
    }


    logout() {
        localStorage.removeItem('loggedUser');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

}