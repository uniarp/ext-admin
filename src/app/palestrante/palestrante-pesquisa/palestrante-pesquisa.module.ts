import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalestrantePesquisaPageRoutingModule } from './palestrante-pesquisa-routing.module';

import { PalestrantePesquisaPage } from './palestrante-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalestrantePesquisaPageRoutingModule,
  ],
  declarations: [PalestrantePesquisaPage]
})
export class PalestrantePesquisaPageModule {}
