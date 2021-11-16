import { Component, Input, OnInit } from '@angular/core';
import {
  Company,
  Information,
  Offers,
} from 'src/app/models/models';
import {CompanyDataService} from "../../../services/company.data.service";
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
  @Input() currentCompanyName: string;
  public company: Company = {} as Company;

  public offers: Offers[];
  public isOnOffer: boolean = false;
  public currentOfferId: number;
  public currentOfferCompanyName: string;

constructor(
      private companyDataService: CompanyDataService,
      private infosDataService: InfosDataService,
      private userService: UserService,
      private router: Router,
      private dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log("init company")
    this.loadCompany();
    console.log("init offers")
    this.loadOffers();
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

  loadCompany(): void {
    this.companyDataService.getCompany$(this.companyId).subscribe((company: Company[]) => {
      this.company = company[0];
      console.log(this.company);
    });
  }

  loadOffers(): void {
    this.companyDataService.getCompanyOffers$(this.currentCompanyName).subscribe((offres: Offers[]) => {
      this.offers = offres;
      console.log(this.offers);
    });
  }

  goToOffer(offer: Offers): void {
    this.currentOfferId = offer.offer_id;
    this.currentOfferCompanyName = offer.cpn_name;
    this.isOnOffer = true;
  }
  
}
