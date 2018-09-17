import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  messages: Message[] = [];
  message: Message;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messages = [];
    this.userService.getAllMessages().subscribe(m => {
      this.messages = m;
    });
  }

}
