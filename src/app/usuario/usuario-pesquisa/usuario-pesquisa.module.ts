import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPesquisaPageRoutingModule } from './usuario-pesquisa-routing.module';

import { UsuarioPesquisaPage } from './usuario-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPesquisaPageRoutingModule
  ],
  declarations: [UsuarioPesquisaPage]
})
export class UsuarioPesquisaPageModule {}
