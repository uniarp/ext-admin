import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalestrantePesquisaPage } from './palestrante-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: PalestrantePesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalestrantePesquisaPageRoutingModule {}
