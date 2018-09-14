import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  logout() {
    console.log('logging out');
    localStorage.clear();
    this.router.navigate(['Login']);
    this.userService.subscribers.next(null);
  }
}
