import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {NewUser, UpdateUserProfile, User} from "../models/models";
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

  getUserByEmail$(
      email: string
  ): Observable<any> {
    let params = {
      email: email
    }
    return this.http.get("http://localhost:3000/user/mail=" + email);
  }

  getUserById$(
      id: number
  ): Observable<any> {
    let params = {
      id: id
    }
    return this.http.get("http://localhost:3000/user/id=" + id);
  }

  updateUser$(
      updateUserProfile: UpdateUserProfile,
      userId: number
  ): Observable<any> {
    let body = {
      updateUserProfile: updateUserProfile,
      userId: userId
    }
    return this.http.post("http://localhost:3000/user/updateProfile", body);
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
