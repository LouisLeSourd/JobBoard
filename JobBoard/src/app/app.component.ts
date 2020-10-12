import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public icons: string[] = [
    'key',
    'user',
    'edit',
    'birth',
    'prise',
    'search',
    'delete',
    'adress',
    'writing',
    'graduate',
    'briefcase',
    'parametres',
    'utilisateur',
    'description_user',
  ];

  constructor(private sanitizer: DomSanitizer,
              private iconRegistry: MatIconRegistry) {
  }

  ngOnInit() {
    this.icons.forEach((iconName: string) => {
      this.iconRegistry.addSvgIcon(
          iconName,
          this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/' + iconName + '.svg'));
    });
  }

}


