import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http: Http, private authService: AuthService) {}

    getUsers() {
        let token = localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Bearer ' + token});
        // console.log(headers);
        let options = new RequestOptions({headers: headers});
        // console.log(options);
        return this.http.get('/user/', options)
            .map((response: Response) => response.json());
    }

}