import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Alunos } from './entity/alunos/alunos';
import { AlunosService } from './services/aluno-service';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Alunos
  ],
  providers: [
    AlunosService 
  ],
  bootstrap: [App]
})
export class AppModule { }
