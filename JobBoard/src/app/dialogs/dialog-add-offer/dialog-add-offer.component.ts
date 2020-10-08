import {Component, Inject, OnInit} from '@angular/core';
import {CompanyField, CompanyName, CompanySize, Offer} from '../../models/models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CompaniesDataService} from '../../services/companies.data.service';

@Component({
  selector: 'app-dialog-add-offer',
  templateUrl: './dialog-add-offer.component.html',
  styleUrls: ['./dialog-add-offer.component.scss']
})
export class DialogAddOfferComponent implements OnInit {

  public newOffer: Offer = {} as Offer;
  public companiesFields: CompanyField[];
  public companiesSizes: CompanySize[];
  public companiesNames: CompanyName[];

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private companiesDataService: CompaniesDataService,
              private dialogRef: MatDialogRef<DialogAddOfferComponent>) {
  }

  ngOnInit(): void {
    this.loadCompanySettings();
  }

  loadCompanySettings(): void {
    this.companiesDataService.getCompanyNames$().subscribe(names => {
      this.companiesNames = names;
    });
    this.companiesDataService.getCompanyFileds$().subscribe(fields => {
      this.companiesFields = fields;
    });
    this.companiesDataService.getCompanySizes$().subscribe(sizes => {
      this.companiesSizes = sizes;
    });
  }

  disabledSubmit(): boolean {
    return !(this.newOffer.offer_sector && this.newOffer.offer_required_exp && this.newOffer.offer_language
        && this.newOffer.offer_postal_code && this.newOffer.offer_description && this.newOffer.offer_function
        && this.newOffer.offer_country && this.newOffer.offer_adress && this.newOffer.offer_city
        && this.newOffer.cpn_size && this.newOffer.cpn_name && this.newOffer.cpn_field
        && this.newOffer.offer_contract_type && this.newOffer.offer_title && this.newOffer.offer_contract_duration);
  }

  addOffer(): void {
    this.dialogRef.close(this.newOffer);
  }

}
