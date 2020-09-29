import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Page} from '../../models/enum';
import {MatIconRegistry} from '@angular/material/icon';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public page = Page;
  public currentPage: Page = Page.HOME_PAGE;

  constructor(private router: Router,
              private route: ActivatedRoute,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
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
    }
  }

  displayBorderBottom(page: Page): boolean {
    return this.currentPage === page;
  }

  matIconRegistry(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
    iconRegistry.addSvgIcon(
        'connexion',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/key.svg'));
    iconRegistry.addSvgIcon(
        'inscription',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'));
  }

}
