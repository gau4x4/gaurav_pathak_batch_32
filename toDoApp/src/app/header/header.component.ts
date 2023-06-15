import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  // name: string = '';
  // someBool: boolean = false;
  // @ViewChild("tempRef", { static: true }) tempRef: ElementRef;

  // someHandler() {
  //   this.tempRef.nativeElement.innerText = this.name;
  // }
  userSession: String = "Login";
  ngAfterViewInit() {
    // console.log(this.tempRef)
  }
  loginHandler(): void {
    this.userSession = this.userSession === "Login" ? "Logout" : "Login";
  }

}

// Assignment:- Design a header with a background blue, text color white, with display menu options profile contact, login, and a searchbox.
// Create a navigation component and (it) Navigation component should be vertically left align
// Login: text on click shall change to logout