import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  users: User[] = [];
  user: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = [];
    this.userService.getAllUsers().subscribe(u => {
      this.users = u;
    });
  }

  openChat(id) {
    console.log(id);
    const u: User = JSON.parse(localStorage.getItem('user'));
    console.log(u.uId);
    this.userService.getConversationsByUId(u.uId).subscribe(conversations => {
      console.log(conversations);
      let found = false;
      conversations.forEach(c => {
        console.log(c);
        if ((c.uId1 === id && c.uId2 === u.uId && !found) || (c.uId1 === u.uId && c.uId2 === id && !found)) {
          console.log('found a match');
          localStorage.setItem('conversation', JSON.stringify(c));
          found = true;
        }
      });
      if (!found) {
        this.userService.createConversation(u.uId, id).subscribe(conversation => {
          localStorage.setItem('conversation', JSON.stringify(conversation));
        });
      }
      this.router.navigate(['Chatbox']);
    });
  }

}
