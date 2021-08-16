
import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { User } from '../interfaces/user/user.module';
import { Notas } from '../notas/notas.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: User[] = [];
  notas: Notas[] = [];
  user: any = {}
  userEncontrado: User = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
    notes: [{
      titulo: "",
      descripcion: "",
      tipo: "",
      fechaA: new Date(),
      fechaT: new Date()
    }]
  }

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

  getNotas(): Notas[] {
    this.notas = JSON.parse(localStorage.notas)
    return this.notas;
  }

  deleteNota(notaActual : Notas){
    this.users = JSON.parse(localStorage.users)

    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))
    console.log(this.user.notes)
    this.notas = this.user.notes
    var index = this.user.notes.indexOf(notaActual);

    console.log("index", index, notaActual)
    if (index > -1) {
      console.log("entro al if")
      this.user.notes.splice(index, 1);
     }
    
    console.log("elimino")
    localStorage.users = JSON.stringify(this.users)
    
  }

  setNotas(nota: Notas) {

    this.users = JSON.parse(localStorage.users)
    
    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))
    
    this.userEncontrado=this.user
    this.userEncontrado.notes.push(nota) 
  //  console.log("esto es user2", this.user)
    console.log("esto es userencontrado", this.userEncontrado)
    localStorage.users = JSON.stringify(this.users)




    /*for (let i = 0; i < emails.length; i++) {
      if (emails[i] == sessionStorage.getItem('email')) {
        user.nota.push(nota)
      }
    }*/

    //console.log(this.users)
    //user.nota.push(nota)
    //console.log(user)








    /*this.notas.push(nota);
    console.log(this.notas)
    localStorage.notas=JSON.stringify(this.notas)*/
  }

  logIn(email: string, password: string): boolean { // /login POST
    this.users = JSON.parse(localStorage.users || "[]");
    let emails = this.users.map(function (e) { return e.email })
    let passwords = this.users.map(function (e) { return e.password })
    let pos = emails.indexOf(email)
    if (pos != -1) {
      if (passwords[pos] === password) {
        localStorage.isLogIn = 1;
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        return true
      }
      else {
        localStorage.isLogIn = 0;
        return false
      }

    } else {
      localStorage.isLogIn = 0;
      return false;
    }
  }


  getIsLogin(): number {
    return parseInt(localStorage.isLogIn) || 0;
  }


}


