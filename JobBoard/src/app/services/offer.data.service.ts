import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferDataService {


  constructor(protected http: HttpClient) {
  }

  getOffer$(
      companyName: string,
      offerId: number
  ): Observable<any> {
    return this.http.get('http://localhost:3000/offer/name=' + companyName + '/id=' + offerId);
  }

}
