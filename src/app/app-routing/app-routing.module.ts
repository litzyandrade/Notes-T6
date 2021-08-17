import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from '../notas/notas.component';
import { NuevaNotaComponent } from '../nueva-nota/nueva-nota.component';

import { RegistroComponent } from '../registro/registro.component';
import { AuthGuardService } from '../auth-guard.service';
import { AccesoComponent } from '../acceso/acceso.component';
import { UsersComponent } from '../users/users.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'acceso', component: AccesoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  {
    path: 'notas',
    component: NotasComponent,
    children: [{
      path: "nueva-nota",
      component: NuevaNotaComponent,
    }],
    canActivate: [AuthGuardService]

  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
