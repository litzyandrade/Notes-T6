import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    NuevaNotaComponent
  ],
  imports: [
 
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]

 
})
export class AppModule { }
