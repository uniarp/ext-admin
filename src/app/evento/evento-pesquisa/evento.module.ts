import { ListaInscritosPage } from './../lista-inscritos/lista-inscritos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { EventoCancelarPage } from '../evento-cancelar/evento-cancelar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule
  ],
  declarations: [EventoPage, EventoCancelarPage, ListaInscritosPage],
  entryComponents: [EventoCancelarPage, ListaInscritosPage]
})
export class EventoPageModule {}
