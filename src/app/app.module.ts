import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';
import { NotasComponent } from './notas/notas.component';
import { AccesoComponent } from './acceso/acceso.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';
import { TablaNotasComponent } from './tabla-notas/tabla-notas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    RegistroComponent,
    NotasComponent,  
    NuevaNotaComponent, 
    AccesoComponent, 
    UsersComponent, TablaNotasComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]


})
export class AppModule { }
