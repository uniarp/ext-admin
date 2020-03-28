import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtividadeCadastroPageRoutingModule } from './atividade-cadastro-routing.module';

import { AtividadeCadastroPage } from './atividade-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtividadeCadastroPageRoutingModule
  ],
  declarations: [AtividadeCadastroPage]
})
export class AtividadeCadastroPageModule {}
