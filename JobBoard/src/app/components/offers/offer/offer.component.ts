import {Component, Input, OnInit} from '@angular/core';
import {OfferDataService} from '../../../services/offer.data.service';
import {Information, Offer, Offers} from '../../../models/models';
import {DialogApplyComponent} from "../../../dialogs/dialog-apply/dialog-apply.component";
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {InfosDataService} from "../../../services/infos.data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  public offer: Offer = {} as Offer;

  @Input() offerId: number;
  @Input() companyName: string;

  constructor(private router: Router,
              private dialog: MatDialog,
              private userService: UserService,
              private offerDataService: OfferDataService,
              private infosDataService: InfosDataService) { }

  ngOnInit(): void {
    this.loadOffer();
  }

  apply(offer: Offer): void {
    console.log(offer);
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

  loadOffer(): void {
    this.offerDataService.getOffer$(this.companyName, this.offerId).subscribe((offer: Offer[]) => {
      this.offer = offer[0];
      console.log(this.offer);
    });
  }

}
