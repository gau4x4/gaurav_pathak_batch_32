import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css']
})
export class AppNavigationComponent {
  hobbies = ['Hobbies-1', 'Hobbies-2', 'Hobbies-3', 'Hobbies-4'];
  getContactPrinted(inputContact: any) {
    console.log(inputContact);
  }
}
