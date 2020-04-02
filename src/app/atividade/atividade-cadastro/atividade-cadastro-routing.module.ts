import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadeCadastroPage } from './atividade-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadeCadastroPage
  },
  {
    path: ':codAtividade',
    component: AtividadeCadastroPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadeCadastroPageRoutingModule {}
