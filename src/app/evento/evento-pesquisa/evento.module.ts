import { ListaInscritosPage } from './../lista-inscritos/lista-inscritos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { EventoCancelarPage } from '../evento-cancelar/evento-cancelar.page';
import { EscolherParticipantePage } from 'src/app/escolher-participante/escolher-participante.page';
import { EscolherParticipantePageModule } from 'src/app/escolher-participante/escolher-participante.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule,
    EscolherParticipantePageModule
  ],
  declarations: [EventoPage, EventoCancelarPage, ListaInscritosPage],
  entryComponents: [EventoCancelarPage, ListaInscritosPage,EscolherParticipantePage]
})
export class EventoPageModule {}
