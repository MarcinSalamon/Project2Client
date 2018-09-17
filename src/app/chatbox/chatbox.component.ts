import { Conversation } from './../models/conversation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../models/message';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  messages: Message[] = [];
  message: Message;
  conv: Conversation;
  user: User = JSON.parse(localStorage.getItem('user'));
  t: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    // this.loadMessages();
    this.ping();
  }

  ping() {
    setInterval(() => this.loadMessages(), 1000);
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  loadMessages() {
    this.conv = JSON.parse(localStorage.getItem('conversation'));
    console.log(this.conv.cId);
    this.t = JSON.parse(localStorage.getItem('talkto'));
    this.userService.getAllMessages(this.conv.cId).subscribe(m => {
      if (this.messages !== m) {
        this.messages = m;
      }
    });
  }

  sendMessage(message) {
    console.log('chatbox.component.sendMessage()');
    const mess = {
      messageUserId: JSON.parse(localStorage.getItem('user')).uId,
      message: message,
      conversationId: this.conv.cId
    };
    this.userService.sendMessage(mess).subscribe(m => this.messages.push(m));
    console.log(message);
    this.message = null;
  }

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

}
