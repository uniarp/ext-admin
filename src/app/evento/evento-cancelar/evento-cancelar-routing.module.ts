import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoCancelarPage } from './evento-cancelar.page';

const routes: Routes = [
  {
    path: '',
    component: EventoCancelarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoCancelarPageRoutingModule {}
