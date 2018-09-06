import { Injectable } from '@angular/core';
import { User } from '../models/user';
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

  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    console.log(`Registering user: ${user.username}`);
    const json = JSON.stringify(user);
    // stringify data and send it to server
    return this.http.post<User>('http://localhost:8080/api/v1/' + 'register', json, HTTP_OPTIONS);
  }

}
