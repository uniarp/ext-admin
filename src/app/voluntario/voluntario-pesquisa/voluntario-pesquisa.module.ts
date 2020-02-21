import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntarioPesquisaPageRoutingModule } from './voluntario-pesquisa-routing.module';

import { VoluntarioPesquisaPage } from './voluntario-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntarioPesquisaPageRoutingModule
  ],
  declarations: [VoluntarioPesquisaPage]
})
export class VoluntarioPesquisaPageModule {}
