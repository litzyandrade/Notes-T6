import { Component, Input, OnInit } from '@angular/core';
import { Notas } from '../notas/notas.module';
import { UserService } from '../servicio/user.service';

@Component({
  selector: 'app-tabla-notas',
  templateUrl: './tabla-notas.component.html',
  styleUrls: ['./tabla-notas.component.css']
})
export class TablaNotasComponent implements OnInit {
notas:Notas[]=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.obtenerNotas();
  }
 async obtenerNotas(){
   try {
    this.notas = await this.userService.getNota();
     
   } catch (error) {
    console.log(error);
   }

  }

}

