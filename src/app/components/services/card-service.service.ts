import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardImages, SingleCard } from '../interfaces/card';
import { AllCards } from '../interfaces/card';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  pageNumb = 1;
  api = environment.apiUrl

  constructor(private http: HttpClient, private errorService: ErrorsService) { }

  // getCards(page: number, pageSize: number): Observable<AllCards[]> {
  //   const params = new HttpParams()
  //     .set(`page`, page.toString())
  //     .set(`pageSize`, pageSize.toString())
  //   return this.http.get<AllCards[]>(this.api, { params });
  // }

  getCards(page: number = 0) {
    return this.http
      .get<AllCards>(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php` + `?offset=${page * 0}&num=20`
      )
      .pipe(
        tap((cardResult) => {
          this.pageNumb = Math.ceil(
            cardResult.count / cardResult.data.length
          );
        })
      );
  }

  getCardByName(name: string) {
    return this.http
      .get<SingleCard>(`https://db.ygoprodeck.com/api/v7/cardinfo.php/` + name)
  }


  getImages(): Observable<CardImages[]> {
    return this.http.get<CardImages[]>(`https://db.ygoprodeck.com/api/v7/cardinfo.php`).pipe(
      tap(data => this.saveLocally(data))
    )
  }

  saveLocally(data: CardImages[]): void {
    localStorage.setItem(`image_url_small`, JSON.stringify(data))
  }


  // private saveImages(imageUrl: string): void {
  //   this.http.get(imageUrl, { responseType: `blob` })
  //     .subscribe(blob => {
  //       const urlParts = imageUrl.split("/");
  //       const imageName = urlParts[urlParts.length - 1];
  //       const file = new File([blob], imageName, { type: `image/jpeg` });
  //     });
  // }

  // saveCardImages(cards: AllCards[]): void{
  //   cards.forEach(card => {
  //     card.images.forEach(imgUrl =>
  //       this.saveImages.bind(imgUrl));
  //     //cicli array immagini, salva immagini
  //   });
}




