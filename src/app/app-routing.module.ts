import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: ListaPostsComponent },
  { path: 'post', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', component: ListaPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
