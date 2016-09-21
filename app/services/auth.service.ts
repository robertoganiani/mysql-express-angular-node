import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    private loggedIn = false;
    username = "username";

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('loggedUser');
    }

    login(username, password) {
        this.username = username;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.loggedIn = true;
        return this.http
            .post(
                '/user/login',
                JSON.stringify({username, password}),
                {headers}
            )
            .map((res) => {
                if (res.status === 200) {
                    localStorage.setItem('loggedUser', res["_body"]);
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

    register(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                '/user/register',
                JSON.stringify({username, password}),
                {headers}
            );
    }

}