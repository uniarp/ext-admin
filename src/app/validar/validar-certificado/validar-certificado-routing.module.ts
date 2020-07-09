import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarCertificadoPage } from './validar-certificado.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarCertificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarCertificadoPageRoutingModule {}
