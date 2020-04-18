import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoCancelarPageRoutingModule } from './evento-cancelar-routing.module';

import { EventoCancelarPage } from './evento-cancelar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoCancelarPageRoutingModule
  ],
  declarations: [EventoCancelarPage],
  exports: [EventoCancelarPage]
})
export class EventoCancelarPageModule {}
