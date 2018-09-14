import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  user = new User();
  users: User[] = [];
  loggedUser = localStorage.getItem('user');
  isValid = false;
  message = '';

  // Validate user input
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  fnameFormControl = new FormControl('', [
    Validators.required
  ]);
  lnameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);
  confirmPasswordFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.registerUser(this.user).subscribe(u => {
      this.userService.subscribers.next(u);
      localStorage.setItem('user', JSON.stringify(u));
      // store key, value pair
      console.log(`User, ${this.user.username}, successfully registered`);
    });
  }

}
