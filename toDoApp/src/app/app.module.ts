import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppProfileComponent } from './app-profile/app-profile.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, AppNavigationComponent, AppLoginComponent, AppSignupComponent, AppProfileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
