import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BrMaskerModule } from 'br-mask';

import { UsuarioCadastroPageRoutingModule } from './usuario-cadastro-routing.module';
import { UsuarioCadastroPage } from './usuario-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioCadastroPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [UsuarioCadastroPage]
})
export class UsuarioCadastroPageModule {}
