import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/enum';
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
  }

  private getCompanies():void {
    this.dataService.getCompanies$().subscribe(companies => {
      if (companies) {
        this.companies = companies;
      }
    });
  }


}
