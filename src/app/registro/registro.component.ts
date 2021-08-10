import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user:User={
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password:"" 
  }
  constructor() { }

  ngOnInit(): void {
  }

  registro(fu: NgForm){
    console.log("llegue a registro")
    this.user = fu.value
    console.log(this.user)
  }





}
