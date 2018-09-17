import { Conversation } from './../models/conversation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../models/message';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatSidenav } from '@angular/material/sidenav';

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

  constructor(private userService: UserService) { }

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

}
