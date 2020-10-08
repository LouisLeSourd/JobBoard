import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../models/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-apply',
  templateUrl: './dialog-apply.component.html',
  styleUrls: ['./dialog-apply.component.scss']
})
export class DialogApplyComponent implements OnInit {

  public motivation: string;
  public user: User;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private router: Router,
              private dialogRef: MatDialogRef<DialogApplyComponent>) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }

  canApply(): boolean {
    return !this.user.user_cv;
  }

  goToPageSignIn(): void {
    this.router.navigate(['/user/profile']);
  }

  updateMotivation(): void {
    this.dialogRef.close(this.motivation);
  }

}
