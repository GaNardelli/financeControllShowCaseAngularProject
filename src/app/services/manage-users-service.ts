import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.type';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  http = inject(HttpClient);
  constructor() { }
  getUsers(user?: User) {
    let url = 'https://jsonplaceholder.typicode.com/users';
    if (user?.username && user.username != '') {
      url += `?username=${user.username}`;
    }
    if (user?.name && user.name != '') {
      url += `?name=${user.name}`;
    }
    return this.http.get<Array<User>>(url);
  }
}
