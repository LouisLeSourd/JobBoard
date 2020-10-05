import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UpdateUserProfile, User} from '../../models/models';
import {ClonerService} from '../../services/cloner.service';

@Component({
  selector: 'app-dialog-update-profile',
  templateUrl: './dialog-update-profile.component.html',
  styleUrls: ['./dialog-update-profile.component.scss']
})
export class DialogUpdateProfileComponent implements OnInit {

  public user: User;
  public updateUser: UpdateUserProfile;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private clonerService: ClonerService,
              private dialogRef: MatDialogRef<DialogUpdateProfileComponent>) {

  }

  ngOnInit(): void {
    this.user = this.clonerService.deepClone(this.data.user);
    this.updateUser = {
      user_city: this.user.user_city,
      user_birth: this.user.user_birth,
      user_adress: this.user.user_adress,
      user_country: this.user.user_country,
      user_posta_code: this.user.user_posta_code,
      user_graduation: this.user.user_graduation
    } as UpdateUserProfile;
  }

  updateData(): void {
    this.dialogRef.close(this.updateUser);
  }

}
