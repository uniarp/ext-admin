import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprimirInscritosPage } from './imprimir-inscritos.page';

const routes: Routes = [
  {
    path: '',
    component: ImprimirInscritosPage
  },
  {
    path: ':codEvento',
      component: ImprimirInscritosPage
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprimirInscritosPageRoutingModule {}
