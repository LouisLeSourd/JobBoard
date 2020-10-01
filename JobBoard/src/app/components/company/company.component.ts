import { Component, OnInit } from '@angular/core';
import {Company} from 'src/app/models/models';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public companies: Company[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCompanies();
    this.getCompaniesWithId(1);
  }

  private getCompanies():void {
    this.dataService.getCompanies$().subscribe(companies => {
      if (companies) {
        this.companies = companies;
      }
    });
  }

  private getCompaniesWithId(idCompany: number):void {
    this.dataService.getCompaniesWithId$(idCompany).subscribe(companies => {
      if (companies) {
        this.companies = companies;
      }
    });
  }


}
