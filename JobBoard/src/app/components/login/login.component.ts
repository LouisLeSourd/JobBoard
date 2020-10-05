import {Component, OnInit} from '@angular/core';
import {ErrConnection, Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../services/user.service";
import {UserDataService} from 'src/app/services/user.data.service';
import { User } from 'src/app/models/models';

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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userDataService: UserDataService,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  connection(): void {
    this.userDataService.getUser$(this.email).subscribe((user: User) => {
      if (!user[0]) {
        // bad_email
      } else {
        if (user[0].user_password === this.pwd) {
          this.userService.setUser(user[0]);
          this.goTo(this.page.HOME_PAGE);
        } else {
          // bad_pwd
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
