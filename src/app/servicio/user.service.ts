import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../interfaces/user/user.module';
import { Notas } from '../notas/notas.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  notas: Notas[] = [];
  constructor(private apiServices: ApiService) { }

  registerUser(user: User) {
    return new Promise((resolve, reject) => {
      if (user.email != null) {
        this.apiServices.setUsers(user)
        resolve("Exito en la operación, usuario insertado correctamente")
      } else {
        reject("Valor del email no valido")
      }
    })
  }

  getUsers() {
    return new Promise<User[]>((resolve, reject) => {
      this.users = this.apiServices.getUsers();
      resolve(this.users);
    })
  }

  logIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      let isUser = this.apiServices.logIn(email, password);
      if (isUser) {
        resolve(true)
      } else { reject(false) }

    })
  }
  isLogin() {
    return this.apiServices.getIsLogin()
  }

  agregarNota(nota: Notas) {
    return new Promise((resolve, reject) => {
      this.apiServices.setNotas(nota);
      resolve("Nota insertada correctamente!")
      reject("Error al insertar la nota")

    })
  }

  eliminarNota(nota: Notas) {
    return new Promise((resolve, reject) => {
      console.log("si entro a eliminar")
      this.apiServices.deleteNota(nota);
      resolve("Nota eliminada correctamente!")
      reject("Error al eliminar la nota")

    })
  }

}
