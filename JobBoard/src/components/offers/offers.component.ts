import { Component, OnInit } from '@angular/core';
import {
  Companies,
  CompaniesFilters,
  CompanyField,
  CompanySize, Information,
  Offer, OfferContractDuration, OfferContractType, OfferFunction, OfferRequiredExp,
  Offers,
  OffersFilters,
  OfferTitle, UpdateUserProfile, User
} from 'src/app/models/models';
import {CompaniesDataService} from "../../services/companies.data.service";
import {OffersDataService} from "../../services/offers.data.service";
import { forkJoin } from 'rxjs';
import {UserService} from "../../services/user.service";
import {DialogUpdateProfileComponent} from "../../dialogs/dialog-update-profile/dialog-update-profile.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogApplyComponent} from "../../dialogs/dialog-apply/dialog-apply.component";
import {InfosDataService} from "../../services/infos.data.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  public offers: Offers[];
  public offersFilters: OffersFilters = {} as OffersFilters;
  public filteredOffers: Offers[];
  public isOnOffer: boolean = false;
  public currentOfferId: number;
  public currentOfferCompanyName: string;

  public offerTitlse: OfferTitle[];
  public companySizes: CompanySize[];
  public companyFields: CompanyField[];
  public offerFunctions: OfferFunction[];
  public offerRequiredExps: OfferRequiredExp[];
  public offerContractTypes: OfferContractType[];
  public offerContractDurations: OfferContractDuration[];

constructor(
      private offersDataService: OffersDataService,
      private infosDataService: InfosDataService,
      private userService: UserService,
      private router: Router,
      private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadOffersSettings();
    this.loadOffers();
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

  apply(offer: Offers): void {
    if (this.userService.isConnect) {
      const dialogRef = this.dialog.open(DialogApplyComponent, {
        width: '60%',
        data: {
          user: this.userService.getUser()
        }
      });
      dialogRef.afterClosed().subscribe((message: string) => {
        let newInfo: Information = {
          offer_id: offer.offer_id,
          cpn_id: offer.cpn_id,
          user_id: this.userService.getUserId(),
          cpn_email: offer.cpn_email,
          text_email: message,
          user_email: this.userService.user.user_email
        } as Information;
        console.log(newInfo);
        this.infosDataService.postInfos$(newInfo).subscribe(() => {
          alert('Vous avez postuler pour l\'offre : ' + offer.offer_title + ' !');
        });
      });
    } else {
      alert('Vous devez être connecté pour pouvoir postuler');
      this.router.navigate(['/login']);
    }
  }

  loadOffers(): void {
    this.offersDataService.getOffers$().subscribe((offers: Offers[]) => {
      this.offers = offers;
      this.filteredOffers = offers;
    });
  }

  goToOffer(offer: Offers): void {
    this.currentOfferId = offer.offer_id;
    this.currentOfferCompanyName = offer.cpn_name;
    this.isOnOffer = true;
  }

}
