import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner' ;
import { IonicModule } from '@ionic/angular';

import { ScannerQrPageRoutingModule } from './scanner-qr-routing.module';
import { ScannerQrPage } from './scanner-qr.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerQrPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [ScannerQrPage]
})
export class ScannerQrPageModule {}
