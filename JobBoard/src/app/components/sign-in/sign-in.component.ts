import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDataService} from "../../services/user.data.service";
import {NewUser, User} from 'src/app/models/models';
import { FormControl, Validators } from '@angular/forms';
import {ErrorService} from "../../services/error.service";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;
  public acceptation: boolean;

  public newUser: NewUser = {} as NewUser;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userDataService: UserDataService,
              private userServcie: UserService,
              private errorService: ErrorService) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorService();

  ngOnInit(): void {
    this.acceptation = false;
  }

  goTo(page: Page): void {
    this.currentPage = page;
    switch (page) {
      case Page.LOGIN:
        this.router.navigate(['/login']);
        break;
      case Page.HOME_PAGE:
        this.router.navigate(['']);
        break;
    }
  }

  disabledSubmit(): boolean {
    if ((this.newUser.name && this.newUser.surname && this.newUser.email && this.newUser.pwd && this.newUser.pwdConfirm && this.acceptation)
      && (this.newUser.pwd === this.newUser.pwdConfirm)) {
      return false;
    } else {
      return true;
    }
  }

  addUser(): void {
    this.userDataService.postUser$(this.newUser).subscribe(result => {
      if (result) {
        this.userDataService.getUserByEmail$(this.newUser.email).subscribe((newUser: User) => {
          this.userServcie.setUser(newUser[0]);
          this.goTo(this.page.HOME_PAGE);
        });
      }
    });
  }

}
