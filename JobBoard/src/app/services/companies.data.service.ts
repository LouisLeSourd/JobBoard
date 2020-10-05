import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {

  constructor(protected http: HttpClient) {
  }

  getCompaniesFileds$(): Observable<any> {
    return this.http.get('http://localhost:3000/companies/fields');
  }

}
