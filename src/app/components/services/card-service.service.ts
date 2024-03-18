import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleCard } from '../interfaces/card';
import { AllCards } from '../interfaces/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  pageNumb = 1;
  apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

  constructor(private http: HttpClient) { }

  getCards(): Observable<AllCards[]> {
    return this.http.get<AllCards[]> (this.apiUrl);
  }
}
