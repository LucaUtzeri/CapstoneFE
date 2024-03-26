import { Component, Input, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/components/services/card-service.service';
import { SingleCard } from 'src/app/components/interfaces/card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() cardName!: string;
  card!: SingleCard;
  constructor(private cardSrv: CardServiceService) { }

  ngOnInit() {
    this.cardSrv.getCardByName(this.cardName).subscribe((resp) => {
      this.card = resp;
    })
  }
}
