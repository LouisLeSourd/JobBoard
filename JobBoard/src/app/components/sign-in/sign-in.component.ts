import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDataService} from "../../services/user.data.service";
import {NewUser} from 'src/app/models/models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;

  public newUser: NewUser = {} as NewUser;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userDataService: UserDataService) {
  }

  ngOnInit(): void {
  }

  goTo(page: Page): void {
    this.currentPage = page;
    switch (page) {
      case Page.LOGIN:
        this.router.navigate(['/login']);
        break;
    }
  }

  disabledSubmit(): boolean {
    if ((this.newUser.name && this.newUser.surname && this.newUser.email && this.newUser.pwd && this.newUser.pwdConfirm)
      && (this.newUser.pwd === this.newUser.pwdConfirm)) {
      return false;
    } else {
      return true;
    }
  }

  addUser(): void {
    this.userDataService.postUser$(this.newUser).subscribe(result => {

    });
  }

}
