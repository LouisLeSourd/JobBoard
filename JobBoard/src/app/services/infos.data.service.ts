import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Information} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class InfosDataService {

  constructor(protected http: HttpClient) {
  }

  postInfos$(
      newInfo: Information
  ): Observable<any> {
    const body = {
      newInfo
    };
    return this.http.post('http://localhost:3000/addInfo', body);
  }

}
