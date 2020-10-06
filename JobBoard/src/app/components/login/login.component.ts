import {Component, OnInit} from '@angular/core';
import {ErrConnection, Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../services/user.service";
import {UserDataService} from 'src/app/services/user.data.service';
import { User } from 'src/app/models/models';
import {FormGroup} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;

  public email: string;
  public pwd: string;
  public bad_pwd: boolean = false;
  public bad_email: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userDataService: UserDataService,
              private cookieService: CookieService,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  connection(): void {
    this.bad_pwd = false;
    this.bad_email = false;
    this.userDataService.getUserByEmail$(this.email).subscribe((user: User) => {
      if (!user[0]) {
        this.bad_email = true;
      } else {
        if (user[0].user_password === this.pwd) {
          this.cookieService.set('email', this.email);
          this.cookieService.set('password', this.pwd);
          console.log(this.cookieService.get('email'));
          console.log(this.cookieService.get('password'));
          this.userService.setUser(user[0]);
          this.goTo(this.page.HOME_PAGE);
        } else {
          this.bad_pwd = true;
        }
      }
    });
  }

  goTo(page: Page): void {
    this.currentPage = page;
    switch (page) {
      case Page.HOME_PAGE:
        this.router.navigate(['']);
        break;
      case Page.COMPANY:
        this.router.navigate(['/company']);
        break;
      case Page.OFFER:
        this.router.navigate(['/offers']);
        break;
      case Page.LOGIN:
        this.router.navigate(['/login']);
        break;
      case Page.SIGN_IN:
        this.router.navigate(['/sign-in']);
        break;
    }
  }
}
