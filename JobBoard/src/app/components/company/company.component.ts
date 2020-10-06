import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Page} from "../../models/enum";
import {CompaniesDataService} from "../../services/companies.data.service";
import {Companies, CompaniesFilters, Company, CompanyField, CompanySize} from 'src/app/models/models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public companiesFields: CompanyField[];
  public companiesSizes: CompanySize[];
  public companies: Companies[];
  public filteredCompanies: Companies[];
  public companiesFilters: CompaniesFilters = {} as CompaniesFilters;

  constructor(
      private companiesDataService: CompaniesDataService,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
    this.loadCompanySettings();
    this.loadCompanies();
  }

  matIconRegistry(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
    iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
    iconRegistry.addSvgIcon(
        'briefcase',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/briefcase.svg'));
    iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
  }

  buildURL(logo: string): string {
    return 'assets/icons/logos/' + logo;
  }

  getCompaniesWithFilters(): void {
    this.companiesDataService.getCompaniesByFilters$(this.companiesFilters).subscribe((companies: Companies[]) => {
      this.filteredCompanies = companies;
    });
    if (this.companiesFilters.cpn_name) {
      this.filteredCompanies.forEach(company => {
        if (!company.cpn_name.includes(this.companiesFilters.cpn_name.toLowerCase())) {
          this.filteredCompanies.splice(this.filteredCompanies.findIndex(companyIndex => companyIndex.cpn_name.toLowerCase() === company.cpn_name), 1);
        }
      });
    }
  }

  deleteCompaniesFilters(): void {
    this.companiesFilters = {} as CompaniesFilters;
    this.loadCompanies();
  }

  loadCompanySettings(): void {
    this.companiesDataService.getCompanyFileds$().subscribe(fields => {
      this.companiesFields = fields;
    });
    this.companiesDataService.getCompanySizes$().subscribe(sizes => {
      this.companiesSizes = sizes;
    });
  }

  loadCompanies(): void {
    this.companiesDataService.getCompanies$().subscribe((companies: Companies[]) => {
      this.companies = companies;
      this.filteredCompanies = companies;
    });
  }

}
