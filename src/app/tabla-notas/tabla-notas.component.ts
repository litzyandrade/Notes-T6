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

  user: User[] =[];
  users : User[]=[];
  notas : Notas[] = [];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
  }



  

}

