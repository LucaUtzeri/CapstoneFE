import { Component, Input, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/components/services/card-service.service';
import { SingleCard, SingleCardResponse } from 'src/app/components/interfaces/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {

  card!: SingleCardResponse;
  constructor(private cardSrv: CardServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log("----", params);
      let cardName = params.get('name') || '';
      this.cardSrv.getCardByName(cardName).subscribe((resp) => {
        this.card = resp;
        console.log("----", resp)
      })
    })
  }
}
