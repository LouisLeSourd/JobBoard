import { Injectable } from '@angular/core';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor() {

  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

}
