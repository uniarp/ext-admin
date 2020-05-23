import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImprimirInscritosPageRoutingModule } from './imprimir-inscritos-routing.module';
import { ImprimirInscritosPage } from './imprimir-inscritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprimirInscritosPageRoutingModule
  ],
  declarations: [ImprimirInscritosPage]
})
export class ImprimirInscritosPageModule {}
