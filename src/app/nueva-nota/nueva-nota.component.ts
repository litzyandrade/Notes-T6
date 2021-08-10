import { Component, OnInit } from '@angular/core';
import { NuevaNota } from './nueva-nota.module';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {
  notas:NuevaNota[]=[];
  nota:NuevaNota={
    titulo:"",
    descripcion:"",
    tipo:"",
    fechaA:new Date,
    fechaT:new Date
  };

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(fn:NgForm):void{
    const{titulo,descripcion,tipo,fechaA,fechaT}=fn.value
    this.nota={
      titulo:titulo,
      descripcion:descripcion,
      tipo:tipo,
      fechaA:fechaA,
      fechaT:fechaT
    }
    this.notas.push(this.nota);
    console.log(this.notas)
  }

}
