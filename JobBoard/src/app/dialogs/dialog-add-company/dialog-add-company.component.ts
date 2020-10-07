import {Component, Inject, OnInit} from '@angular/core';
import {Company, CompanyField, CompanySize} from '../../models/models';
import {FormControl, Validators} from '@angular/forms';
import {ErrorService} from '../../services/error.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CompaniesDataService} from '../../services/companies.data.service';

@Component({
  selector: 'app-dialog-add-company',
  templateUrl: './dialog-add-company.component.html',
  styleUrls: ['./dialog-add-company.component.scss']
})
export class DialogAddCompanyComponent implements OnInit {

  public newCompany: Company = {} as Company;
  public companiesFields: CompanyField[];
  public companiesSizes: CompanySize[];

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private companiesDataService: CompaniesDataService,
              private dialogRef: MatDialogRef<DialogAddCompanyComponent>) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorService();

  ngOnInit(): void {
    this.loadCompanySettings();
  }

  loadCompanySettings(): void {
    this.companiesDataService.getCompanyFileds$().subscribe(fields => {
      this.companiesFields = fields;
    });
    this.companiesDataService.getCompanySizes$().subscribe(sizes => {
      this.companiesSizes = sizes;
    });
  }

  disabledSubmit(): boolean {
    return !(this.newCompany.cpn_turnover && this.newCompany.cpn_representative && this.newCompany.cpn_head_office
        && this.newCompany.cpn_employees_number && this.newCompany.cpn_email && this.newCompany.cpn_description
        && this.newCompany.cpn_name && this.newCompany.cpn_field && this.newCompany.cpn_size);
  }

  addCompany(): void {
    this.dialogRef.close(this.newCompany);
  }

}
