import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FriendsListComponent } from './friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    DashboardComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
