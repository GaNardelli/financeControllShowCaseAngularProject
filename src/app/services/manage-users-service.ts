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
    let username = '';
    let name = '';
    if ((user?.username && user.username != '') && (user?.name && user.name != '')) {
      url += `?username=${username}&name=${name}`;
    } else if ((user?.username && user.username != '')) {
      url += `?username=${user.username}`;
    } else if (user?.name && user.name != '') {
      url += `?name=${user.name}`;
    }
    return this.http.get<Array<User>>(url);
  }
}
