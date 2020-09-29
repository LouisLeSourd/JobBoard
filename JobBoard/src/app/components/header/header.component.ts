import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Page} from "../../models/enum";
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public page = Page;
  public currentPage:Page = Page.HOME_PAGE;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'connexion',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/key.svg'));
    iconRegistry.addSvgIcon(
        'inscription',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'));
  }

  ngOnInit(): void {
  }

  job(): void {
    this.currentPage = Page.JOB;
  }

  offer(): void {
    this.currentPage = Page.OFFER;
  }

  displayBorderBottom(page: Page): boolean {
    return this.currentPage === page ? true: false;
  }

  goToHomePage(): void {
    this.currentPage = Page.HOME_PAGE;
  }

}
