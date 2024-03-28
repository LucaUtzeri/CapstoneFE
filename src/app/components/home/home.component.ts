import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../services/card-service.service';
import { AllCards } from '../interfaces/card';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  query: string = '';
  cards!: AllCards;
  pageNo: number[] = [];
  displayPageNo: number[] = [];
  currentPage = 1;
  pageSize = 20;




  constructor(private cardSrv: CardServiceService, private router: Router) {
    cardSrv.getCards().subscribe((data) => {
      this.cards = data;
      for (let i = 0; i < this.cardSrv.pageNumb; i++) {
        this.pageNo.push(i);
        if (i < 5) {
          this.displayPageNo.push(i);
        }
      }

    })
  }

  fetchByPage(page: number) {
    this.currentPage = page;
    this.cardSrv.getCards(page).subscribe((cards) => {
      this.cards = cards;


      this.displayPageNo = this.pageNo.slice(
        this.currentPage - 1 < 0 ? 0 : this.currentPage - 1,
        this.currentPage + 5
      );
    });
  }

  fetchCards(page: number) {
    this.cardSrv.getCards(page).subscribe((cards) => {
      console.log(cards)
      this.cards = cards;
    })
  }


  loadCards(): void {
    this.cardSrv.getCards(this.currentPage)
      .subscribe(cards => { this.cards = cards });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCards();
  }

  previousPage(): void {
    this.currentPage--;
    this.loadCards();
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.loadCards();
  }

  getCardbyQuery(query: NgForm) {
    this.query = query.value.query
    console.log('--->', this.query);

    this.cardSrv.getFuzzyCardName(this.query).subscribe((resp) => {
      this.cards = resp;
      console.log('+++++', resp)
    })
    // this.router.navigate(['/details', this.search])
  }

  search(ev: Event) {
    ev.preventDefault();
    this.router.navigate(['/details', this.query])
  }
}

