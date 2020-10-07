import {Component, Inject, OnInit} from '@angular/core';
import {NewUser} from '../../models/models';
import {ErrorService} from '../../services/error.service';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  public newUser: NewUser = {} as NewUser;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorService();

  ngOnInit(): void {
  }

  disabledSubmit(): boolean {
    return !((this.newUser.user_name && this.newUser.user_surname && this.newUser.user_email && this.newUser.user_password && this.newUser.pwdConfirm)
        && (this.newUser.user_password === this.newUser.pwdConfirm));
  }

  addUser(): void {
    this.dialogRef.close(this.newUser);
  }

}
