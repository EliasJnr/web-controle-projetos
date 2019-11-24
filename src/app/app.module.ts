import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoNovoComponent } from './projeto-novo/projeto-novo.component';
import { ProjetoListaComponent } from './projeto-lista/projeto-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoNovoComponent,
    ProjetoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
