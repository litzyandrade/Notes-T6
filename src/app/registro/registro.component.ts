import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../servicio/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  userForm:FormGroup;
  mensaje: any = "";
  constructor(private userService: UserService) { 
    this.userForm= new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required, Validators.minLength(10)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

  async registro({value, valid}: {value:User, valid:boolean}){
    console.log(value,valid)
    if(valid){
      try {
        this.mensaje = await this.userService.registerUser(value)
        console.log(typeof this.mensaje, this.mensaje)
        this.userForm.reset();
      } catch (error) {
        console.log(error)
      }
    }else{
      this.mensaje= "Tienes campos invalidos"
      console.log(this.userForm)
    }
  }

}
