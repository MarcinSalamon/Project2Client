import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CurrentUserService } from '../services/current-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user: User;

  constructor() { }

  ngOnInit() {
  }

  // updateUser(email, fname, lname) {
  //   const id = this.user.uId;
  //   this.userService.updateUser(id, email, fname, lname)
  //     .subscribe(user => this.user = user);
  //   this.currentUser.setCurrentUser(this.user);
  // }

}
