import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BrMaskerModule } from 'br-mask';

import { CadastroPageRoutingModule } from './palestrante-cadastro-routing.module';
import { PalestranteCadastroPage } from './palestrante-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,

    BrMaskerModule
  ],
  declarations: [PalestranteCadastroPage]
})
export class PalestranteCadastroPageModule {}
