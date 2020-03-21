import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoluntarioPesquisaPage } from './voluntario-pesquisa.page';


const routes: Routes = [
  {
    path: '',
    component: VoluntarioPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntarioPesquisaPageRoutingModule {}
