import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Page} from "../../models/enum";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
  }

matIconRegistry(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
  iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
}

}
