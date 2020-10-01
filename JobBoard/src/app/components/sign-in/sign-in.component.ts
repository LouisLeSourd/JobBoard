import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/enum';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;

  public name: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
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

  addUser(): void {
    this.dataService.postUser$(this.name).subscribe(result => {
      console.log('okokokok');
    });
  }

}
