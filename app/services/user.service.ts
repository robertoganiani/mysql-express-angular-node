import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    constructor(private http: Http, private authService: AuthService) {}

    getUsers() {
        let token = localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Bearer ' + token});
        // console.log(headers);
        let options = new RequestOptions({headers: headers});
        // console.log(options);
        return this.http
            .get('/user', options)
            .map((response: Response) => response.json());
    }

    addUser(id, name, age, city) {
        let token = localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Bearer ' + token});
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});

        return this.http
            .post('/user/add', JSON.stringify({id, name, age, city}), options)
            .map((response: Response) => response.json());
    }

    editUser(id, name, age, city) {
        let token = localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Bearer ' + token});
        headers.append('Content-Type', 'application/json');
        return this.http
            .put('/user', JSON.stringify({id, name, age, city}), {headers})
            .map((res:Response) => res.json());
    }

    deleteUser(id: number) {
        // console.log(id);
        let token = localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Bearer ' + token});
        headers.append('Content-Type', 'application/json');
        return this.http
            .delete('/user/' + id, {headers})
            .map((res:Response) => res.json());
    }

}