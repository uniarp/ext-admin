import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import {InscricaoParticipantePage} from './inscricao-participante.page'
import { InscricaiParticipantePageRoutingModule } from './inscricao-participante-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscricaiParticipantePageRoutingModule,
    BrMaskerModule
  ],
  declarations: [InscricaoParticipantePage]
})
export class inscricaoParticipantePageModule {}
