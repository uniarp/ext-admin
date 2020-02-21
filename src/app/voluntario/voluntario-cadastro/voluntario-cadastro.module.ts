import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntarioCadastroPageRoutingModule } from './voluntario-cadastro-routing.module';

import { VoluntarioCadastroPage } from './voluntario-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntarioCadastroPageRoutingModule
  ],
  declarations: [VoluntarioCadastroPage]
})
export class VoluntarioCadastroPageModule {}
