import { AtividadeCadastroPage } from './../../atividade/atividade-cadastro/atividade-cadastro.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { EventoCadastroPageRoutingModule } from './evento-cadastro-routing.module';

import { EventoCadastroPage } from './evento-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoCadastroPageRoutingModule,
    BrMaskerModule,
  ],
  declarations: [EventoCadastroPage, AtividadeCadastroPage],
  entryComponents: [AtividadeCadastroPage],
})
export class EventoCadastroPageModule {}
