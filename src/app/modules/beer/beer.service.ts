import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './model/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getRandomBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers/random`);
  };
}
