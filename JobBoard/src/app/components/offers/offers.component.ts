import { Component, OnInit } from '@angular/core';
import {Companies, CompaniesFilters, Offers, OffersFilter} from 'src/app/models/models';
import {DataService} from '../../services/data.service';
import {CompaniesDataService} from "../../services/companies.data.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {OffersDataService} from "../../services/offers.data.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  public offers: Offers[];
  public filteredOffers: Offers[];

  constructor(
      private offersDataService: OffersDataService,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
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

  loadOffers(): void {
    this.offersDataService.getOffers$().subscribe((offers: Offers[]) => {
      this.offers = offers;
      this.filteredOffers = offers;
      console.log(this.filteredOffers);
    });
  }

}
