import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notas } from './notas.module';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
notas:Notas []=[];
nota:Notas={
  
  titulo:"",
  descripcion:"",
  tipo:"",
  fechaA:new Date(),
  fechaT:new Date()
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){

}
}
