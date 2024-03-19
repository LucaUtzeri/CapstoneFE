import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleCard } from '../interfaces/card';
import { AllCards } from '../interfaces/card';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  pageNumb = 1;
  api = environment.apiUrl

  constructor(private http: HttpClient, private errorService: ErrorsService) { }

  getCards(page: number, pageSize: number): Observable<AllCards[]> {
    const params = new HttpParams()
      .set(`page`, page.toString())
      .set(`pageSize`, pageSize.toString())
    return this.http.get<AllCards[]>(this.api, { params });
  }



  
  private saveImages(imageUrl: string): void {
    this.http.get(imageUrl, { responseType: `blob` })
      .subscribe(blob => {
        const urlParts = imageUrl.split("/");
        const imageName = urlParts[urlParts.length - 1];
        const file = new File([blob], imageName, { type: `image/jpeg` });
      });
  }

  saveCardImages(cards: AllCards[]): void{
    cards.forEach(card => {
      card.images.forEach(imgUrl =>
        this.saveImages.bind(imgUrl));
      //cicli array immagini, salva immagini
    });
  }

}
