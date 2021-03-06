import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogUpdateProfileComponent} from '../../dialogs/dialog-update-profile/dialog-update-profile.component';
import {UserService} from '../../services/user.service';
import {UserDataService} from '../../services/user.data.service';
import {UpdateUserProfile, User} from '../../models/models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public description: string;
  public isAlreadyACV: boolean;
  public selectedFiles: any;

  constructor(private dialog: MatDialog,
              public userService: UserService,
              private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.isAlreadyACV = false;
    if (this.userService.user.user_cv) {
      this.selectedFiles = this.userService.user.user_cv;
    }
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

  selectFile(event): void {
    this.selectedFiles = event.target.files[0].name;
    this.userDataService.updateUserCV$(this.userService.getUserId(), this.selectedFiles).subscribe(() => {
      alert('Votre cv a bien été modifié');
      this.userDataService.getUserById$(this.userService.getUserId()).subscribe((user: User) => {
        this.userService.setUser(user[0]);
      });
    });
  }

  updateDescription(): void {
    this.userDataService.updateUserDescription$(this.userService.getUserId(), this.description).subscribe(() => {
      alert('Votre description a bien été modifié');
    });
  }

}
