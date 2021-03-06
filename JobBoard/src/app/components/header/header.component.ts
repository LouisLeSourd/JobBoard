import {Component, OnInit} from '@angular/core';
import {Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/models';
import {UserService} from '../../services/user.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;
  public user: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cookieService: CookieService,
              public userService: UserService) {
  }

  ngOnInit(): void {
    if (this.userService.getUser()) {
    this.user = this.userService.getUser();
    }
  }

  goTo(page): void {
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
      case Page.DECONNECTION:
        this.userService.unSetUser();
        this.router.navigate(['']);
        this.cookieService.delete('password');
        this.cookieService.delete('email');
        break;
      case Page.PROFILE:
        this.router.navigate(['/user/profile']);
        break;
      case Page.USER_SETTINGS:
        this.router.navigate(['/user/settings']);
        break;
      case Page.DATABASE:
        this.router.navigate(['/user/admin/database']);
        break;
    }
  }

  displayBorderBottom(page: Page): boolean {
    return this.currentPage === page;
  }

}
