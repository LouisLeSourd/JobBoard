import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfosDataService {

  constructor(protected http: HttpClient) {
  }

  postInfos$(): Observable<any> {
    const body = {

    };
    return this.http.post('http://localhost:3000/addInfo', body);
  }

}
