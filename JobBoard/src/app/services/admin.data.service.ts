import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company, NewUser, Offer} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {


  constructor(protected http: HttpClient) {
  }

  getCompanies$(): Observable<any> {
    return this.http.get('http://localhost:3000/admin/info/companies');
  }

  getOffers$(): Observable<any> {
    return this.http.get('http://localhost:3000/admin/info/offers');
  }

  getUsers$(): Observable<any> {
    return this.http.get('http://localhost:3000/admin/info/users');
  }

  getInformations$(): Observable<any> {
    return this.http.get('http://localhost:3000/admin/info/apply');
  }

  deleteUser$(
      userId: number
  ): Observable<any> {
    let params = {
      userId: userId
    };
    return this.http.get('http://localhost:3000/admin/deleteUser/id=' + userId);
  }

  deleteCompany$(
      companyId: number
  ): Observable<any> {
    let params = {
      companyId: companyId
    };
    return this.http.get('http://localhost:3000/admin/deleteCompany/id=' + companyId);
  }

  deleteOffer$(
      offerId: number
  ): Observable<any> {
    let params = {
      offerId: offerId
    };
    return this.http.get('http://localhost:3000/admin/deleteOffer/id=' + offerId);
  }

  postUser$(
      newUser: NewUser
  ): Observable<any> {
    let body = {
      newUser: newUser
    }
    return this.http.post('http://localhost:3000/admin/addUser', body);
  }

  postCompany$(
      newCompany: Company
  ): Observable<any> {
    let body = {
      newCompany: newCompany
    }
    return this.http.post('http://localhost:3000/admin/addCompany', body);
  }

  postOffer$(
      newOffer: Offer
  ): Observable<any> {
    let body = {
      newOffer: newOffer
    }
    return this.http.post('http://localhost:3000/admin/addoffer', body);
  }

}
