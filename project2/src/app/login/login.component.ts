import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  loggedUser = localStorage.getItem('user');
  isValid = true;
  usr: string;
  pw: string;
  closeResult: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('in login()');
    this.isValid = true;
    // validate user input
    this.userService.loginUser([this.usr, this.pw]).subscribe(user => {
      if (user == null) {
        // if user doen't exist, not valid
        this.isValid = false;
      } else {
        this.userService.subscribers.next(user);
        // handle delivered value
        localStorage.setItem('user', JSON.stringify(user));
        // store key, value pair
        this.router.navigate(['Dashboard']);
      }
    });
  }

}
