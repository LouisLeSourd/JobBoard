import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import { UserDataService } from 'src/app/services/user.data.service';
import { User } from 'src/app/models/models';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;
  public pwd: string;
  public email: string;

  constructor(private router: Router,
              private userDataService: UserDataService,
              private cookieService: CookieService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userDataService.getUserByEmail$(this.cookieService.get('email')).subscribe((user: User) => {
      if (user[0]) {
        if (user[0].user_password === this.cookieService.get('password')) {
          console.log(this.cookieService.get('email'));
          console.log(this.cookieService.get('password'));
          this.userService.setUser(user[0]);
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
