import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
  showLogin = true;
  showSignup = false;
  showProfile = false;
  username = "";
  password = "";
  fname = "";
  lname = "";
  phone = "";
  email = "";
  password_signup = "";
  dob = "";
  handleLogin() {
    this.showLogin = false;
    this.showSignup = false;
    this.showProfile = true;
  }
  gotoSignup() {
    this.showLogin = false;
    this.showSignup = true;
    this.showProfile = false;
  }
  handleSignup() {
    this.showLogin = false;
    this.showSignup = false;
    this.showProfile = true;
  }
  gotoLogin() {
    this.showLogin = true;
    this.showSignup = false;
    this.showProfile = false;
  }
}
