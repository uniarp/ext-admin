import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPesquisaPage } from './usuario-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPesquisaPageRoutingModule {}
