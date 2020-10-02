import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {DialogUpdateProfileComponent} from '../../dialogs/dialog-update-profile/dialog-update-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public isAlreadyACV: boolean;

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private dialog: MatDialog) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
    this.isAlreadyACV = false;
  }

  updateProfile(): void {
    const dialogRef = this.dialog.open(DialogUpdateProfileComponent, {
      width: '80%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(confirm => {
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
