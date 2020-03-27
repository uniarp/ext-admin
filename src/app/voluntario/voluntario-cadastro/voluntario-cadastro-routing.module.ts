import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoluntarioCadastroPage } from './voluntario-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: VoluntarioCadastroPage
  },
  {
    path: ':codVoluntario',
    component: VoluntarioCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntarioCadastroPageRoutingModule {}
