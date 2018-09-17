import { OnlineStatus } from './../models/online-status';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Message } from '../models/message';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  // userFriends: BehaviorSubject<Reimbursement[]> = new BehaviorSubject<Reimbursement[]>(null);

  loginUser(creds: string[]): Observable<User> {
    console.log(`Validating user: ${creds[0]}`);
    // sent request to server
    const json = JSON.stringify(creds);
    return this.http.post<User>(environment.apiUrl + 'login', json, HTTP_OPTIONS);
  }

  updateUser(uId, username, email, fname, lname, onlineStatus) {
    const user = {
      uId: uId,
      username: username,
      email: email,
      fname: fname,
      lname: lname,
      onlineStatus: onlineStatus
    };
    const json = JSON.stringify(user);
    console.log(user);
    return this.http.put<User>(environment.apiUrl + 'user/' + user.uId, json, HTTP_OPTIONS);
  }

  registerUser(user: User): Observable<User> {
    console.log(`Registering user: ${user.username}`);
    const json = JSON.stringify(user);
    console.log(user);
    // stringify data and send it to server
    return this.http.post<User>(environment.apiUrl + 'user', json, HTTP_OPTIONS);
  }

  getAllUsers() {
    console.log('In UserService.getAllUsers()');
    const json = '';
    return this.http.get<User[]>(environment.apiUrl + 'user');
  }

  logoutStatus() {
    console.log('In UserService.logoutStatus()');
    const json = '';
    return this.http.post<User[]>(environment.apiUrl + 'logout', json, HTTP_OPTIONS);
  }

  getAllMessages() {
    console.log('In UserService.getAllMessages()');
    const json = '';
    return this.http.get<Message[]>(environment.apiUrl + 'conversation/2/message');
  }

}
