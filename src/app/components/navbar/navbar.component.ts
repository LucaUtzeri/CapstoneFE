import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { lsAuth } from '../interfaces/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardServiceService } from '../services/card-service.service';
import { AllCards, SingleCardResponse } from '../interfaces/card';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  query: string = '';
  user!: lsAuth | null;
  card!: AllCards
  subscription: Subscription[] = [];
  constructor(private userServ: UserServiceService, private router: Router, private cardSrv: CardServiceService) { }

  ngOnInit(): void {
    this.userServ.user$.subscribe((_user) => {
      this.user = _user;
    });
  }

  search(ev: Event) {
    ev.preventDefault();
    this.router.navigate(['/detail', this.query])
  }
}
