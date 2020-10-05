import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginComponent} from './components/login/login.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {OffersComponent} from './components/offers/offers.component';
import {CompanyComponent} from './components/company/company.component';
import {HomeComponent} from './components/home/home.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {DatabaseSettingsComponent} from './components/database-settings/database-settings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'company', component: CompanyComponent},
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
