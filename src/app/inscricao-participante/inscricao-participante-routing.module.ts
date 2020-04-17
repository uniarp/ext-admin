import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscricaoParticipantePage } from './inscricao-participante.page';

const routes: Routes = [
  {
    path: '',
    component: InscricaoParticipantePage
  },
  {
    path: ':codParticipante',
    component: InscricaoParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscricaiParticipantePageRoutingModule {}
