import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { UserService } from '../servicio/user.service';
import { Notas } from '../notas/notas.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User[]=[];
  users: User[] = [];
  notas: Notas[] = [];
  mensaje: any = "";
  mensajeExito: any ="";
  aviso: any = "";
  flag: boolean =false;
  bandera : boolean = false;
  b : boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getNotas();
  }

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



  mostrarNotas(email: String) {
    this.notas = []
    this.userEncontrado = this.users.filter(user => user.email == email)[0]
    this.userEncontrado.notes.forEach(nota => {
      this.notas.push(nota)
      
    })
    if (this.notas.length ==0){
      console.log("entro",this.mensaje)
      this.flag = !this.flag;
      this.mensaje = this.flag?"!Vaya! parece que aun no tienes notas guardadas en este usuario" : "Ocultar"
    }

  }
async eliminarUsuario(nombre: String){
  try{
    this.userEncontrado = this.users.filter(user => user.nombre == nombre)[0]
    this.mensaje = await this.userService.eliminarUsuario(this.userEncontrado)
    console.log(this.mensaje)
    this.b = !this.b;
    this.aviso =this.b?"Usuario eliminado exitosamente, recarga la pagina para ver cambios" : ""
  }catch (error){
    console.log(error);
  }
}
  async eliminarNotas(titulo: String) {
    try {
      this.notaActual = this.notas.filter(nota => nota.titulo == titulo)[0]
      this.mensaje = await this.userService.eliminarNota(this.notaActual)
      this.bandera = !this.bandera;
      this.mensajeExito  = this.bandera?"Nota eliminada correctamente, recarga la pagina para ver cambios": ""
      console.log(this.mensaje)
    }
    catch (err) {
      console.log(err);
    }
  }

  async getUsers() {
    try {

      this.users = await this.userService.getUsers();

    } catch (err) {
      console.log(err);
    }
  }


  async getNotas() {
    try {

      //this.notas = await this.userService.getNota();

    } catch (err) {
      console.log(err);
    }
  }
}
