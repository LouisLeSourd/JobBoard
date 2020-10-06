import { Component, OnInit } from '@angular/core';
import {
  Companies,
  CompaniesFilters,
  CompanyField,
  CompanySize,
  Offer, OfferContractDuration, OfferContractType, OfferFunction, OfferRequiredExp,
  Offers,
  OffersFilters,
  OfferTitle
} from 'src/app/models/models';
import {DataService} from '../../services/data.service';
import {CompaniesDataService} from "../../services/companies.data.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {OffersDataService} from "../../services/offers.data.service";
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  public offers: Offers[];
  public offersFilters: OffersFilters = {} as OffersFilters;
  public filteredOffers: Offers[];

  public offerTitlse: OfferTitle[];
  public companySizes: CompanySize[];
  public companyFields: CompanyField[];
  public offerFunctions: OfferFunction[];
  public offerRequiredExps: OfferRequiredExp[];
  public offerContractTypes: OfferContractType[];
  public offerContractDurations: OfferContractDuration[];

constructor(
      private offersDataService: OffersDataService,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
  this.loadOffersSettings();
    this.loadOffers();
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

  getOffersWithFilters(): void {
    if (!this.offersFilters.cpn_size && !this.offersFilters.cpn_field && !this.offersFilters.offer_contract_duration
        && !this.offersFilters.offer_contract_type && !this.offersFilters.offer_function && !this.offersFilters.offer_required_exp
        && this.offersFilters.offer_title === '') {
      this.loadOffers();
    } else {
      this.offersDataService.getOffersByFilters$(this.offersFilters).subscribe((offers: Offers[]) => {
        this.filteredOffers = offers;
      });
    }
  }

  deleteOffersFilters(): void {
    this.offersFilters = {} as OffersFilters;
    this.loadOffers();
  }

  loadOffersSettings(): void {
    forkJoin([
      this.offersDataService.getCompanyFileds$(),
      this.offersDataService.getCompanySizes$(),
      this.offersDataService.getOfferContractDuration$(),
      this.offersDataService.getOfferContractType$(),
      this.offersDataService.getOfferFunctions$(),
      this.offersDataService.getOfferRequiredExp$()
    ]).subscribe(([companyFields, companySizes, contractDurations, contractTypes, functions, requiredExp]) => {
      this.companyFields = companyFields;
      this.companySizes = companySizes;
      this.offerContractDurations = contractDurations;
      this.offerContractTypes = contractTypes;
      this.offerFunctions = functions;
      this.offerRequiredExps = requiredExp;
    });
  }

  loadOffers(): void {
    this.offersDataService.getOffers$().subscribe((offers: Offers[]) => {
      this.offers = offers;
      this.filteredOffers = offers;
    });
  }

}
