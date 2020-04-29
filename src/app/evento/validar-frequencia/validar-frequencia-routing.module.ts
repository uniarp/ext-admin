import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarFrequenciaPage } from './validar-frequencia.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarFrequenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarFrequenciaPageRoutingModule {}
