import { Component, Input, OnInit } from '@angular/core';
import { Notas } from '../notas/notas.module';
import { UserService } from '../servicio/user.service';
import { User } from '../interfaces/user/user.module';
@Component({
  selector: 'app-tabla-notas',
  templateUrl: './tabla-notas.component.html',
  styleUrls: ['./tabla-notas.component.css']
})
export class TablaNotasComponent implements OnInit {
notes:User[]=[];
user: any = {}
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.obtenerNotas();
  }
 async obtenerNotas(){
   try {
    this.user.notes = await this.userService.getNota();
     
   } catch (error) {
    console.log(error);
   }

  }

}

