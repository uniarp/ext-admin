import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantePesquisaPage } from './participante-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantePesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantePesquisaPageRoutingModule {}
