import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: User[] = [];
  constructor() {
    this.users = JSON.parse(localStorage.users || "[]")
  }

  setUsers(user: User) {
    this.users.push(user);
    console.log(this.users)
    localStorage.users = JSON.stringify(this.users)
  }

  getUsers(): User[] {
    this.users = JSON.parse(localStorage.users)
    return this.users;
  }

  logIn() { }

  logOut() { }


}
