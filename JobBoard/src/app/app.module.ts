import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OffersComponent } from './components/offers/offers.component';
import { CompaniesComponent } from './components/companies/companies.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { DialogUpdateProfileComponent } from './dialogs/dialog-update-profile/dialog-update-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DatabaseSettingsComponent } from './components/database-settings/database-settings.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { DialogApplyComponent } from './dialogs/dialog-apply/dialog-apply.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from "@angular/material/paginator";
import { DialogAddUserComponent } from './dialogs/dialog-add-user/dialog-add-user.component';
import { DialogAddCompanyComponent } from './dialogs/dialog-add-company/dialog-add-company.component';
import { DialogAddOfferComponent } from './dialogs/dialog-add-offer/dialog-add-offer.component';
import { OfferComponent } from './components/offers/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignInComponent,
    OffersComponent,
    CompaniesComponent,
    UserProfileComponent,
    UserSettingsComponent,
    DialogUpdateProfileComponent,
    DatabaseSettingsComponent,
    DialogApplyComponent,
    DialogAddUserComponent,
    DialogAddCompanyComponent,
    DialogAddOfferComponent,
    OfferComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
    ],
  providers: [
      DialogUpdateProfileComponent,
      DialogApplyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
