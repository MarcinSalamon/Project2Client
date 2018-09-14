import { Injectable } from '@angular/core';
import { User } from '../models/user';
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

  updateUser(u_id, email, fname, lname) {
    const user = {
      u_id: u_id,
      email: email,
      fname: fname,
      lname: lname
    };

    return this.http.put<User>(environment.apiUrl, user);
  }
  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    console.log(`Registering user: ${user.username}`);
    const json = JSON.stringify(user);
    // stringify data and send it to server
    return this.http.post<User>(environment.apiUrl + 'register', json, HTTP_OPTIONS);
  }

}
