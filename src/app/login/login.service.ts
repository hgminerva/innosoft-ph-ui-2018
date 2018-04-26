import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { LoginUser } from "./login.user";

@Injectable()
export class LoginService {
    // login observable
    public loginSource = new Subject<Boolean>();
    public loginObservable = this.loginSource.asObservable();

    // models
    public loginUser: LoginUser = {
        username: "",
        password: ""
    }

    // contstructor
    constructor(
        private router: Router,
        private http: Http
    ) { }

    // login
    public login(username: string, password: string): void {
        let url = "http://192.168.0.112:8088/token";
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(url, body, options).subscribe(
            response => {
                console.log(response.json().access_token);
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('username', response.json().userName);

                this.loginSource.next(true);
            },
            error => {
                this.loginSource.next(false);
            }
        )
    }
}