import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { Notas } from '../notas/notas.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: User[] = [];
  notas:Notas[]=[];
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
  getNotas():Notas[]{
    this.notas=JSON.parse(localStorage.notas)
    return this.notas;
  }
  setNotas(nota: Notas){
    this.notas.push(nota);
    console.log(this.notas)
    localStorage.notas=JSON.stringify(this.notas)

  }
  logIn(email: string, password: string): boolean { // /login POST
    this.users = JSON.parse(localStorage.users || "[]");
    let emails = this.users.map(function (e) { return e.email })
    let passwords = this.users.map(function (e) { return e.password })
    let pos = emails.indexOf(email)
    if (pos != -1) {
      if (passwords[pos] === password) {
        localStorage.isLogIn = 1;
        return true
      }
      else{
        localStorage.isLogIn = 0;
        return false
      }
        
    } else {
      localStorage.isLogIn = 0;
      return false;
    }
  }


  getIsLogin(): number{
    return parseInt(localStorage.isLogIn) ||0;
  }
  
  
  }


