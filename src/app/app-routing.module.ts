import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoListaComponent } from './projeto-lista/projeto-lista.component';
import { ProjetoNovoComponent } from './projeto-novo/projeto-novo.component';
import { ProjetoEditarComponent } from './projeto-editar/projeto-editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  { path: 'projects', component: ProjetoListaComponent },
  { path: 'add', component: ProjetoNovoComponent },
  { path: 'update/:id', component: ProjetoEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
