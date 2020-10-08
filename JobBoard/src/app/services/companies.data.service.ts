import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompaniesFilters} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {

  constructor(protected http: HttpClient) {
  }

  getCompanyNames$(): Observable<any> {
    return this.http.get('http://localhost:3000/companies/names');
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

  getCompaniesByFilters$(
      companiesFilters: CompaniesFilters
  ): Observable<any> {
    const body = {
      companiesFilters
    };
    return this.http.post<any>('http://localhost:3000/companies/companiesFilters', body);
  }

}
