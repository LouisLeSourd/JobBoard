import { Component, OnInit } from '@angular/core';
import {AdvertisementFilter} from 'src/app/models/models';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  public offers: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getOffersWithId();
  }

  private getOffersWithId(): void {

    const offerFilter: AdvertisementFilter = {
      adv_country: 'France',
      adv_function: 'Génie Civil & Structures',
      adv_contract_type: 'CDI',
    } as AdvertisementFilter;

    this.dataService.postOffersWithFilters$(offerFilter).subscribe(offers => {
      if (offers) {
        this.offers = offers;
        console.log('length', offers.length);
        this.offers.forEach(offer => {
          console.log('offer', offer);
        });
      }
    });
  }

}
