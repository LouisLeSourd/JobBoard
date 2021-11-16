import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(protected http: HttpClient) {
  }

  getCompany$(
    companyId: number
): Observable<any> {
    return this.http.get('http://localhost:3000/company/id=' + companyId + '/offers');
  }
}
