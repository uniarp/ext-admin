import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipanteCadastroPageRoutingModule } from './participante-cadastro-routing.module';

import { ParticipanteCadastroPage } from './participante-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipanteCadastroPageRoutingModule
  ],
  declarations: [ParticipanteCadastroPage]
})
export class ParticipanteCadastroPageModule {}
