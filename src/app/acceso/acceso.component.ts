import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicio/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user/user.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  loginForm: FormGroup;
  mensaje: any = "";
  flag: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),

      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {



  }
  async loginUser({value, valid}:{ value: User, valid: boolean}) {
    if (valid) {

      try {
        let valor = await this.userService.logIn(value.email, value.password)
        if (valor) {
          this.router.navigate(["users"])
          console.log("esta es la sesion actual " + sessionStorage.getItem('email'))
        }
      } catch (er) {
        this.flag = !this.flag;
        this.mensaje = this.flag? "Usuario y contraseña no validos": ""}
    } else {
      this.flag = !this.flag;
      this.mensaje = this.flag? "Error, algun campo esta vacio": ""
      console.log("error")
    }
  }

}
