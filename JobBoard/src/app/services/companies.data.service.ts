import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {

  constructor(protected http: HttpClient) {
  }

  getCompanyFileds$(): Observable<any> {
    return this.http.get('http://localhost:3000/companies/fields');
  }

  getCompanySizes$(): Observable<any> {
    return this.http.get('http://localhost:3000/companies/sizes');
  }

  getCompanies$(): Observable<any> {
    return this.http.get('http://localhost:3000/companies');
  }

}
