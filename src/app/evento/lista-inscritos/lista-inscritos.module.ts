import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaInscritosPageRoutingModule } from './lista-inscritos-routing.module';

import { ListaInscritosPage } from './lista-inscritos.page';
import { ImprimirInscritosPage } from 'src/app/imprimir-inscritos/imprimir-inscritos.page';
import { ImprimirInscritosPageModule } from 'src/app/imprimir-inscritos/imprimir-inscritos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaInscritosPageRoutingModule,
    ImprimirInscritosPageModule,
    ImprimirInscritosPage
  ],
  declarations: [ListaInscritosPage],
  exports: [ListaInscritosPage], 
  entryComponents:[ImprimirInscritosPage]
})
export class ListaInscritosPageModule {}
