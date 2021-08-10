import { Component, Input, OnInit } from '@angular/core';
import { NuevaNota } from '../nueva-nota/nueva-nota.module';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
@Input() notas:NuevaNota[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
