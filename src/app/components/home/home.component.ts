import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../services/card-service.service';
import { AllCards } from '../interfaces/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: AllCards[] = [];
  currentPage = 1;
  pageSize = 20;


  constructor(private cardSrv: CardServiceService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardSrv.getCards(this.currentPage, this.pageSize)
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

  testSaveImage() {
    this.cardSrv.saveCardImages(this.cards);
  }

}
