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
  users : User[]=[];
  notas : Notas[] = [];
  mensaje: any = "";

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
      },
    ]
    }

    notaActual: Notas = {
      titulo: "",
      descripcion: "",
      tipo: "",
      fechaA: new Date(),
      fechaT: new Date()
    }



  mostrarNotas(email : String){
    this.notas = []
    this.userEncontrado = this.users.filter(user => user.email == email)[0]
    this.userEncontrado.notes.forEach(nota => {
      this.notas.push(nota) } ) 

  }

  async eliminarNotas(titulo : String){
    try{
      this.notaActual = this.notas.filter(nota => nota.titulo == titulo)[0]
      this.mensaje = await this.userService.eliminarNota(this.notaActual)
      console.log(this.mensaje)
    }
    catch(err){
      console.log(err);
    }
  }

    async getUsers(){
      try{

        this.users = await this.userService.getUsers();        

      }catch(err){
          console.log(err);
      }    
    }

    
    async getNotas(){
      try{
        
        //this.notas = await this.userService.getNota();

      }catch(err){
          console.log(err);
      }    
    }
}
