import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  CompaniesFilters,
  CompanyField,
  CompanySize, OfferContractDuration, OfferContractType,
  OfferFunction,
  OfferRequiredExp, OffersFilters,
  OfferTitle
} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class OffersDataService {

  constructor(protected http: HttpClient) {
  }

  getOffers$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers');
  }

  getCompanyFileds$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers/fields');
  }

  getCompanySizes$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers/sizes');
  }

  getOfferFunctions$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers/functions');
  }

  getOfferRequiredExp$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers/experiences');
  }

  getOfferContractType$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers/contracts');
  }

  getOfferContractDuration$(): Observable<any> {
    return this.http.get('http://localhost:3000/offers/durations');
  }

  getOffersByFilters$(
      offersFilters: OffersFilters
  ): Observable<any> {
    const body = {
      offersFilters
    };
    return this.http.post<any>('http://localhost:3000/offers/offersFilters', body);
  }

}
