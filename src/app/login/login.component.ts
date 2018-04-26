import { Component, ViewContainerRef } from '@angular/core';
import { LoginService } from './login.service';
import { LoginUser } from "./login.user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // properties
  private loginSub: any;

  // models
  public loginUser: LoginUser = {
    username: "",
    password: ""
  }

  // constructor
  constructor(
    private loginService: LoginService,
    private router: Router,
    private viewContainerRef: ViewContainerRef) { }

  // button login
  public btnLoginClick(): void {
    this.loginService.login(this.loginUser.username, this.loginUser.password);
    this.loginSub = this.loginService.loginObservable.subscribe(
      data => {
        if (data) {
          console.log("Login Successful!");
        } else {
          console.log("Login Failed!");
        }
      }
    )
  }
}
