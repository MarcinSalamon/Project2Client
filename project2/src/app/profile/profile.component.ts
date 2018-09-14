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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  logout() {
    console.log('logging out');
    localStorage.clear();
    this.router.navigate(['Login']);
    this.userService.subscribers.next(null);
  }

  // updateUser(email, fname, lname) {
  //   const id = this.user.uId;
  //   this.userService.updateUser(id, email, fname, lname)
  //     .subscribe(user => this.user = user);
  //   this.currentUser.setCurrentUser(this.user);
  // }

  getUsername(user: User) {
    const id = this.users.filter(u => {
      return u.uId === user.uId;
    })[0];
    return `${id.username}`;
  }

  loadUsers() {
    this.users = [];
    this.userService.getAllUsers().subscribe(u => {
      this.users = u;
    });
  }

}
