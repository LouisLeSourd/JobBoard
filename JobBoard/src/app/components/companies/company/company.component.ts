import { Component, Input, OnInit } from '@angular/core';
import {Page} from "../../../models/enum";
import {
  Company,
  Information,
  Offers,
  OfferTitle, UpdateUserProfile, User
} from 'src/app/models/models';
import {CompanyDataService} from "../../../services/company.data.service";
import {OffersDataService} from "../../../services/offers.data.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../../services/user.service";import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogApplyComponent} from "../../../dialogs/dialog-apply/dialog-apply.component";
import {InfosDataService} from "../../../services/infos.data.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() companyId: number;

  public company: Company = {} as Company;
  public offers: Offers[];
  public currentOfferId: number;
  public filteredOffers: Offers[];
  public offerTitlse: OfferTitle[];
  public isOnOffer: boolean = false;
  public currentOfferCompanyName: string;
  public currentPage: Page = Page.COMPANY;
  public page = Page;

constructor(
      private offersDataService: OffersDataService,
      private companyDataService: CompanyDataService,
      private infosDataService: InfosDataService,
      private userService: UserService,
      private router: Router,
      private dialog: MatDialog,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
    console.log("init company")
    this.loadCompany();
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

  displayBorderBottom(page: Page): boolean {
    return this.currentPage === page;
  }

  loadCompany(): void {
    this.companyDataService.getCompany$(this.companyId).subscribe((company: Company[]) => {
      this.company = company[0];
      console.log(this.company);
    });
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
