import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.matIconRegistry(iconRegistry, sanitizer);
  }

  ngOnInit(): void {
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
  }

}
