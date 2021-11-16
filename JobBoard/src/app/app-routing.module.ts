import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginComponent} from './components/login/login.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {OffersComponent} from './components/offers/offers.component';
import {CompaniesComponent} from './components/companies/companies.component';
import {HomeComponent} from './components/home/home.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {DatabaseSettingsComponent} from './components/database-settings/database-settings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'user/profile', component: UserProfileComponent},
  {path: 'user/settings', component: UserSettingsComponent},
  {path: 'user/admin/database', component: DatabaseSettingsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
