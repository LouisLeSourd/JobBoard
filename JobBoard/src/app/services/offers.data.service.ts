import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompaniesFilters} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class OffersDataService {

  constructor(protected http: HttpClient) {
  }

  getOffers$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers');
  }

}
