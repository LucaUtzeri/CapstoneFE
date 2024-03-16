import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {
  private url: string = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

  // ngOnInit() this.void{
  //   fetch(this.url).then(console.log);
  // }
  constructor() { }

  ngOnInit(): void {
    fetch(this.url)
    .then((resp) => resp.json())
    .then(console.log);
  }

}
