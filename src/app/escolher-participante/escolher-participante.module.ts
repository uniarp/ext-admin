import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherParticipantePageRoutingModule } from './escolher-participante-routing.module';

import { EscolherParticipantePage } from './escolher-participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherParticipantePageRoutingModule,
  ],
  declarations: [EscolherParticipantePage]
})
export class EscolherParticipantePageModule {}
