import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { CurrentUserService } from '../services/current-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  users: User[] = [];
  user: User;

  constructor(private router: Router, private userService: UserService, private currentUser: CurrentUserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  // logout() {
  //   console.log('logging out');
  //   this.userService.logoutStatus(this.user);
  //   localStorage.clear();
  //   this.router.navigate(['Login']);
  //   this.userService.subscribers.next(null);
  // }

  logout() {
    console.log('logging out');
    const id = this.user.uId;
    const username = this.user.username;
    const os = 2;
    const fname = this.user.fname;
    const lname = this.user.lname;
    const email = this.user.email;
    this.userService.logoutStatus(id, username, email, fname, lname, os);
    localStorage.clear();
    this.router.navigate(['Login']);
    this.userService.subscribers.next(null);
  }

  updateUser(email, fname, lname) {
    const id = this.user.uId;
    const username = this.user.username;
    const os = this.user.onlineStatus;
    this.userService.updateUser(id, username, email, fname, lname, os).subscribe(user => {
      this.user.email = email;
      this.user.fname = fname;
      this.user.lname = lname;
      this.currentUser.setCurrentUser(this.user);
      console.log(this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
    });
  }

}
