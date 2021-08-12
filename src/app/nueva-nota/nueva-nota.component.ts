import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Notas } from '../notas/notas.module';
import { CustomValidators } from 'ng4-validators';
import { UserService } from '../servicio/user.service';
@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {
  mensaje: any = "";
  notaForm: FormGroup;
  constructor(private userService: UserService) {
    this.notaForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      fechaA: new FormControl('', [Validators.required]),
      fechaT: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
  }
  /*
   async agregarNota({value, valid}: {value:Notas, valid:boolean}){
     console.log(value,valid)
     if(valid){
       try {
       //  this.mensaje = await this.userService.registerUser(value)
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
 */
  async agregarNota({ value, valid }: { value: Notas, valid: boolean }) {
    console.log(value)
    if (valid) {
      try {
        this.mensaje = await this.userService.agregarNota(value)
        console.log(this.mensaje)
        this.notaForm.reset();

      } catch (error) {
        console.log(error)
      }

    }else{
      this.mensaje="Tienes los campos invalidos"
      console.log(this.notaForm)
    }

  }
}
