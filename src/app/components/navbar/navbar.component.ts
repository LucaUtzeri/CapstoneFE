import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { lsAuth } from '../interfaces/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user!: lsAuth | null;
  constructor(private userServ: UserServiceService) { }

  ngOnInit(): void {
    this.userServ.user$.subscribe((_user) => {
      this.user = _user;
    });
  }

}
