import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {DialogUpdateProfileComponent} from '../../dialogs/dialog-update-profile/dialog-update-profile.component';
import {UserService} from '../../services/user.service';
import {UserDataService} from '../../services/user.data.service';
import {UpdateUserProfile, User} from "../../models/models";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public isAlreadyACV: boolean;

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private dialog: MatDialog,
              public userService: UserService,
              private userDataService: UserDataService) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
    this.isAlreadyACV = false;
  }

  dataLoaded(data: string): string {
    return data ? data : 'Non renseigné';
  }

  dataLoadedNumber(data: number): string {
    return data ? data.toString() : 'Non renseigné';
  }

  dataLoadedDate(data: Date): string {
    return data ? data.toString() : 'Non renseigné';
  }

  updateProfile(): void {
    const dialogRef = this.dialog.open(DialogUpdateProfileComponent, {
      width: '80%',
      data: {
        user: this.userService.getUser()
      }
    });
    dialogRef.afterClosed().subscribe((updateUser: UpdateUserProfile) => {
      if (updateUser) {
        this.userDataService.updateUser$(updateUser, this.userService.getUserId()).subscribe(() => {
          this.userDataService.getUserById$(this.userService.getUserId()).subscribe((user: User) => {
            this.userService.setUser(user[0]);
          });
        });
      }
    });
  }

  matIconRegistry(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
    iconRegistry.addSvgIcon(
        'adress',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/adress.svg'));
    iconRegistry.addSvgIcon(
        'birth',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/birthday-cake.svg'));
    iconRegistry.addSvgIcon(
        'graduate',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/graduate.svg'));
    iconRegistry.addSvgIcon(
        'description',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/description_user.svg'));
    iconRegistry.addSvgIcon(
        'edit',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/writing.svg'));
  }

}
