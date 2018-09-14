import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
 providedIn: 'root'
})
export class CurrentUserService {

 user: User;

 constructor() { }

 setCurrentUser(user: User) {
   this.user = user;
   console.log(user);
   console.log(this.user);
 }

 getCurrentUser() {
   console.log(this.user);
   return this.user;
 }
}
