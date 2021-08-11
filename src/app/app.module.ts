import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';
import { NotasComponent } from './notas/notas.component';
import { AccesoComponent } from './acceso/acceso.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    RegistroComponent,
    NotasComponent,  
    NuevaNotaComponent, 
    AccesoComponent, 
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]


})
export class AppModule { }
