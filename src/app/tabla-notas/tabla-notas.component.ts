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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();

    setTimeout(() => {
      this.mostrarNotas();
    }, 2000);

  }

  mostrarNotas() {
    this.notas = []
    this.user = this.users.find(obj => obj.email == sessionStorage.getItem('email'))
    this.userEncontrado = this.user
    this.userEncontrado.notes.forEach(nota => {
      this.notas.push(nota)
    })
  }

  async getUsers() {
    try {

      this.users = await this.userService.getUsers();
    } catch (err) {
      console.log(err);
    }
  }

}

