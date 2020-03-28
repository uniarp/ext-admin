import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantePesquisaPageRoutingModule } from './participante-pesquisa-routing.module';

import { ParticipantePesquisaPage } from './participante-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantePesquisaPageRoutingModule
  ],
  declarations: [ParticipantePesquisaPage]
})
export class ParticipantePesquisaPageModule {}
