import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoNovoComponent } from './projeto-novo/projeto-novo.component';
import { ProjetoListaComponent } from './projeto-lista/projeto-lista.component';
import { ProjetoEditarComponent } from './projeto-editar/projeto-editar.component';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    ProjetoNovoComponent,
    ProjetoListaComponent,
    ProjetoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
