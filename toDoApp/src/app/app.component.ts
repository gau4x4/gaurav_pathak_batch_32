import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  inputFromChild: string = "";
  private notification: AppNavigationComponent;


  onContactHandled(inputstr: any): void {
    this.inputFromChild = inputstr;
    this.notification.getContactPrinted(inputstr);

  }
  constructor() {
    this.notification = new AppNavigationComponent();
  }
  ngAfterViewInit() {
  }


}
