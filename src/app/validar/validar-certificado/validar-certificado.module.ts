import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarCertificadoPageRoutingModule } from './validar-certificado-routing.module';

import { ValidarCertificadoPage } from './validar-certificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarCertificadoPageRoutingModule
  ],
  declarations: [ValidarCertificadoPage]
})
export class ValidarCertificadoPageModule {}
