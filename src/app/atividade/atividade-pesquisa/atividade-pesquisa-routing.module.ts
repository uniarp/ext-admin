import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadePesquisaPage } from './atividade-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadePesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadePesquisaPageRoutingModule {}
