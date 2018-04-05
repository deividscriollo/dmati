import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { AddTareasComponent } from './components/add-tareas/add-tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AddTareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
