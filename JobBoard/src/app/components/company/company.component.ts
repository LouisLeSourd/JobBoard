import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Page} from "../../models/enum";
import {CompaniesDataService} from "../../services/companies.data.service";
import {CompanyField, CompanySize} from 'src/app/models/models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public companiesFields: CompanyField[];
  public companiesSizes: CompanySize[];

  constructor(
      private companiesDataService: CompaniesDataService,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
    this.loadCompanySettings();
  }

  matIconRegistry(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
    iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
  }

  loadCompanySettings(): void {
    this.companiesDataService.getCompaniesFileds$().subscribe(fields => {
      this.companiesFields = fields;
    });
    this.companiesDataService.getCompaniesFileds$().subscribe(sizes => {
      this.companiesSizes = sizes;
    });
  }

}
