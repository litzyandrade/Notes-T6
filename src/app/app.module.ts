import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';
import { NotasComponent } from './notas/notas.component';
import { AccesoComponent } from './acceso/acceso.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    AccesoComponent, 
    NotasComponent,  
    NuevaNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ AuthGuardService],
  bootstrap: [AppComponent]

 
})
export class AppModule { }
