import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AdminDataService} from '../../services/admin.data.service';
import {forkJoin} from 'rxjs';
import {Company, Information, NewUser, Offer, User} from '../../models/models';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {OffersDataService} from "../../services/offers.data.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import { Row } from 'src/app/models/enum';
import {UserDataService} from "../../services/user.data.service";
import {DialogApplyComponent} from "../../dialogs/dialog-apply/dialog-apply.component";
import {DialogAddUserComponent} from "../../dialogs/dialog-add-user/dialog-add-user.component";
import {DialogAddOfferComponent} from "../../dialogs/dialog-add-offer/dialog-add-offer.component";
import {DialogAddCompanyComponent} from "../../dialogs/dialog-add-company/dialog-add-company.component";

@Component({
  selector: 'app-database-settings',
  templateUrl: './database-settings.component.html',
  styleUrls: ['./database-settings.component.scss']
})
export class DatabaseSettingsComponent implements OnInit {

  public companies: Company[];
  public offers: Offer[];
  public users: User[];
  public informations: Information[];
  public rowType = Row;

  userDisplayedColumns: string[] = ['user_id', 'user_name', 'user_surname', 'user_email', 'delete'];
  userDataSource: MatTableDataSource<User>;
  companiesDisplayedColumns: string[] = ['cpn_id', 'cpn_name', 'cpn_email', 'cpn_field', 'delete'];
  companiesDataSource: MatTableDataSource<Company>;
  offersDisplayedColumns: string[] = ['offer_id', 'offer_title', 'offer_function', 'offer_contract_type', 'cpn_name', 'delete'];
  offersDataSource: MatTableDataSource<Offer>;
  informationsDisplayedColumns: string[] = ['cpn_id', 'cpn_email', 'user_id', 'user_email'];
  informationsDataSource: MatTableDataSource<Information>;

  @ViewChild('paginatorUser') paginatorUser: MatPaginator;
  @ViewChild('paginatorCompanies') paginatorCompanies: MatPaginator;
  @ViewChild('paginatorOffers') paginatorOffers: MatPaginator;
  @ViewChild('paginatorInformations') paginatorInformations: MatPaginator;

  constructor(private adminService: AdminDataService,
              private dialog: MatDialog,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
    this.loadDatas();
  }

  matIconRegistry(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
    iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
  }

  addRow(rowType: Row): void {
    switch (rowType) {
      case Row.USER:
        const dialogRefUser = this.dialog.open(DialogAddUserComponent, {
          disableClose: true,
          width: '60%'
        });
        dialogRefUser.afterClosed().subscribe((newUser: NewUser) => {
            this.adminService.postUser$(newUser).subscribe(() => {
              alert('Utilisateur ' + newUser.user_name + ' ajouté avec succès !');
              this.loadDatas();
            });
        });
        break;
      case Row.COMPANY:
        const dialogRefCompany = this.dialog.open(DialogAddCompanyComponent, {
          disableClose: true,
          width: '60%',
        });
        dialogRefCompany.afterClosed().subscribe((newCompany: Company) => {
          console.log(newCompany);
          this.adminService.postCompany$(newCompany).subscribe(() => {
            alert('Company ' + newCompany.cpn_name + ' ajouté avec succès !');
            this.loadDatas();
          });
        });
        break;
      case Row.OFFER:
        const dialogRefOffer = this.dialog.open(DialogAddOfferComponent, {
          disableClose: true,
          width: '60%',
        });
        dialogRefOffer.afterClosed().subscribe((newOffer: Offer) => {
          this.adminService.postOffer$(newOffer).subscribe(() => {
            alert('Offer ' + newOffer.offer_title + ' ajouté avec succès !');
            this.loadDatas();
          });
        });
        break;
    }
  }

  removeRow(rowType: Row, id: number): void {
    switch (rowType) {
      case Row.USER:
        this.adminService.deleteUser$(id).subscribe(() => {
          alert('Cet utilisateur a bien été supprimé');
        });
        break;
      case Row.COMPANY:
        this.adminService.deleteCompany$(id).subscribe(() => {
          alert('Cette company a bien été supprimé, ses offres associées également');
        });
        break;
      case Row.OFFER:
        this.adminService.deleteOffer$(id).subscribe(() => {
          alert('Cette offre a bien été supprimé');
        });
        break;
    }
    this.loadDatas();
  }

  loadDatas(): void {
    forkJoin([
      this.adminService.getCompanies$(),
      this.adminService.getOffers$(),
      this.adminService.getUsers$(),
      this.adminService.getInformations$(),
    ]).subscribe(([companies, offers, users, informations]) => {
      this.companies = companies;
      this.offers = offers;
      this.users = users;
      this.informations = informations;
      this.userDataSource = new MatTableDataSource(this.users);
      this.userDataSource.paginator = this.paginatorUser;
      this.companiesDataSource = new MatTableDataSource(this.companies);
      this.companiesDataSource.paginator = this.paginatorCompanies;
      this.offersDataSource= new MatTableDataSource(this.offers);
      this.offersDataSource.paginator = this.paginatorOffers;
      this.informationsDataSource = new MatTableDataSource(this.informations);
      this.informationsDataSource.paginator = this.paginatorInformations;
    });
  }

}
