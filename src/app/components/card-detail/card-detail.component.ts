import { Component, Input, OnInit } from '@angular/core';
import { SingleCard } from '../interfaces/card';
import { CardServiceService } from '../services/card-service.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() cardName!: string;
  card!: SingleCard;
  constructor(private cardSrv: CardServiceService) { }

  ngOnInit(): void {
    this.cardSrv.getCardByName(this.cardName).subscribe((data) => {
      if (typeof data !== `string`) {
        this.card = data
      }
    })
  }

}
