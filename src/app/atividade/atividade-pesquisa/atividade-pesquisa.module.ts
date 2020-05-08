import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtividadePesquisaPageRoutingModule } from './atividade-pesquisa-routing.module';

import { AtividadePesquisaPage } from './atividade-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtividadePesquisaPageRoutingModule
  ],
  declarations: [AtividadePesquisaPage]
})
export class AtividadePesquisaPageModule {}
