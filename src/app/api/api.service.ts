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
  /*getUserLog(): User[]{
   
     this.users = JSON.parse(localStorage.users)
    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))
    this.userEncontrado = this.user
    this.userEncontrado.notes.forEach(nota => {
            this.notas.push(nota) } )
    this.users = this.user
    console.log(this.users)

    return this.users;
   
  }*/

  setNotas(nota: Notas) {

    this.users = JSON.parse(localStorage.users)

    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))

    this.userEncontrado = this.user
    this.userEncontrado.notes.push(nota)

    console.log("esto es userencontrado", this.userEncontrado)
    localStorage.users = JSON.stringify(this.users)
    console.log(localStorage.users)

  }
 


  deleteNota(notaActual: Notas) {
    this.users = JSON.parse(localStorage.users)

    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))
    console.log(this.user.notes)
    this.notas = this.user.notes
    var index = this.user.notes.indexOf(notaActual);

    console.log("index", index, notaActual)
    if (index == -1) {
      console.log("entro al if")
      this.user.notes.splice(index, 1);
    }

    console.log("elimino")
    localStorage.users = JSON.stringify(this.users)

  }
deleteUsuario(userEncontrado: User){
  this.users = JSON.parse(localStorage.users)
  this.user = this.users.find(obj => obj.nombre == localStorage.getItem('nombre'))
  this.userEncontrado = this.user
  console.log("recibe usuario",this.userEncontrado)
  var index = this.users.indexOf(userEncontrado);

  console.log("index", index, userEncontrado)
    if (index == -1) {
      console.log("entro al if")
      this.users.splice(index, 1);
    }

    console.log("elimino usuario")
    localStorage.users = JSON.stringify(this.users)
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


