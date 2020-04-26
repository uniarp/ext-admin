import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaInscritosPage } from './lista-inscritos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaInscritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaInscritosPageRoutingModule {}
