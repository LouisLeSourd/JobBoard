import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {NewUser, User} from "../models/models";
import {ErrConnection} from "../models/enum";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(protected http: HttpClient) {

  }


  postUser$(
      newUser: NewUser
  ): Observable<any> {
    let body = {
      newUser: newUser
    }
    return this.http.post('http://localhost:3000/user/add', body);
  }

  getUser$(
      email: string
  ): Observable<any> {
    let params = {
      email: email
    }
    return this.http.get("http://localhost:3000/user/mail=" + email);
  }

  getTestConnection$(
      email: string,
      pwd: string
  ): Observable<ErrConnection> {
    let body = {
      email: email,
      pwd: pwd
    }
    return this.http.post<ErrConnection>('http://localhost:3000/users/testConnection', body);
  }


}
