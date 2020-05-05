import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherParticipantePage } from './escolher-participante.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherParticipantePageRoutingModule {}
