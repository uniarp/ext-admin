import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarFrequenciaPageRoutingModule } from './validar-frequencia-routing.module';

import { ValidarFrequenciaPage } from './validar-frequencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarFrequenciaPageRoutingModule
  ],
  declarations: [ValidarFrequenciaPage]
})
export class ValidarFrequenciaPageModule {}
