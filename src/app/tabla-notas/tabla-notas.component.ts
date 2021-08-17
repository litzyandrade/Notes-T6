import { Component, Input, OnInit } from '@angular/core';
import { Notas } from '../notas/notas.module';

import { UserService } from '../servicio/user.service';
import { User } from '../interfaces/user/user.module';
import { email } from 'ng4-validators/src/app/email/validator';
@Component({
  selector: 'app-tabla-notas',
  templateUrl: './tabla-notas.component.html',
  styleUrls: ['./tabla-notas.component.css']
})
export class TablaNotasComponent implements OnInit {
  users: User[] = [];
  notas: Notas[] = [];
  user: any = {}
  mensaje: any = "";
  sesion: any ="";
  flag : boolean = false;
  bandera: boolean = false;
  userEncontrado: User = {
    nombre: "test",
    apellido: "test",
    telefono: "123456",
    email: "mail2@mail.com",
    password: "123456789",
    notes: [{
      titulo: "notsss",
      descripcion: "asdasdaasd",
      tipo: "Urgente",
      fechaA: new Date(),
      fechaT: new Date()
    },]
  }
  notaActual: Notas = {
    titulo: "",
    descripcion: "",
    tipo: "",
    fechaA: new Date(),
    fechaT: new Date()
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();

    setTimeout(() => {
      this.mostrarNotas();
    }, 1000);

  }

  mostrarNotas() {
    this.notas = []
    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))
    this.userEncontrado = this.user
    this.userEncontrado.notes.forEach(nota => {
      this.notas.push(nota)
    })
    if (this.notas.length ==0){
      console.log("entro",this.mensaje)
      this.flag = !this.flag;
      this.mensaje = this.flag?"!Vaya! parece que aun no tienes notas" : "Ocultar"
    }
  }
  async eliminarNotas(titulo: String) {
    try {
      this.notaActual = this.notas.filter(nota => nota.titulo == titulo)[0]
      this.bandera= !this.bandera;
      this.mensaje = this.bandera? await this.userService.eliminarNota(this.notaActual) : "error"
      console.log(this.mensaje)
    }
    catch (err) {
      console.log(err);
    }
  }
  async getUsers() {
    try {
      this.sesion = sessionStorage.getItem('email')
      this.users = await this.userService.getUsers();
    } catch (err) {
      console.log(err);
    }
  }

}

