import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserDataService} from '../../services/user.data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  public newPwd: string;
  public actualPwd: string;
  public newPwdConfirm: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public userService: UserService,
              public userDataService: UserDataService) {
  }

  ngOnInit(): void {
  }

  deleteAccount(): void {
    this.userDataService.deleteUser$(this.userService.getUserId()).subscribe(() => {
      alert('Votre compte a bien été supprimé');
      this.userService.unSetUser();
      this.router.navigate(['']);
    });
  }

  canUpdate(): boolean {
    return (this.newPwd === this.newPwdConfirm && this.userService.user.user_password === this.actualPwd);
  }

  updatePwd(): void {
    this.userDataService.updateUserPwd$(this.userService.getUserId(), this.newPwd).subscribe(() => {
      alert('Votre mot de passe a bien été modifié');
      this.userService.unSetUser();
      this.router.navigate(['/login']);
    });
  }

}
