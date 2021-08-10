import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from '../notas/notas.component';
import { NuevaNotaComponent } from '../nueva-nota/nueva-nota.component';

import { RegistroComponent } from '../registro/registro.component';
import { AuthGuardService } from '../auth-guard.service';

const routes: Routes=[
  {path: 'registro', component: RegistroComponent},
  {path:'notas',
   component:NotasComponent,
  children:[{
        path:"nueva-nota",
    component:NuevaNotaComponent,
  }]
}]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
