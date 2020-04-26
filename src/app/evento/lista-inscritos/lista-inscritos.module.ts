import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaInscritosPageRoutingModule } from './lista-inscritos-routing.module';

import { ListaInscritosPage } from './lista-inscritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaInscritosPageRoutingModule
  ],
  declarations: [ListaInscritosPage],
  exports: [ListaInscritosPage]
})
export class ListaInscritosPageModule {}
