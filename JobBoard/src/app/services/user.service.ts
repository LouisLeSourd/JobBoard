import { Injectable } from '@angular/core';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;
  public userName: string;
  public isConnect: boolean;
  public isAdmin: boolean;

  constructor() {
  }

  unSetUser(): void {
    this.user = null;
    this.userName = '';
    this.isConnect = false;
  }

  setUser(user: User): void {
    this.user = user;
    this.userName = user.user_name
    this.isConnect = true
  }

  getUser(): User {
    return this.user;
  }

  getUserId(): number {
    return this.user.user_id;
  }

}
