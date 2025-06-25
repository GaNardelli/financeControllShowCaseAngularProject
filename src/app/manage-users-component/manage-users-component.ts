import { inject, Component } from '@angular/core';
import { ManageUsersService } from '../services/manage-users-service';
import { User } from '../model/user.type';
import { catchError } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-manage-users-component',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './manage-users-component.html',
  styleUrl: './manage-users-component.scss'
})
export class ManageUsersComponent {
  manageUsersService = inject(ManageUsersService);
  usersArray = <Array<User>>([]);
  searchUserName: string | undefined;
  constructor () {}
  ngOnInit() : void {
    this.manageUsersService.getUsers().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((users: any) => {
      console.log(users);
      this.usersArray = users;
    })
  }
  findUserByUsername(input: HTMLInputElement) {
    let searchString = input.value;
    this.manageUsersService.getUsers({
      username: searchString,
      name: '',
      email: '',
      id: 0
    }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((users: any) => {
      console.log(users);
      this.usersArray = users;
    })
  }
  findUserByName(input: HTMLInputElement) {
    let searchString = input.value;
    this.manageUsersService.getUsers({
      name: searchString,
      username: '',
      email: '',
      id: 0
    }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((users: any) => {
      console.log(users);
      this.usersArray = users;
    })
  }
  openUpdateDialog(_t11: User) {
  throw new Error('Method not implemented.');
  }
  deleteFromList(arg0: number) {
  throw new Error('Method not implemented.');
  }
}
