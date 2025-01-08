import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeStockPageRoutingModule } from './change-stock-routing.module';

import { ChangeStockPage } from './change-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeStockPageRoutingModule
  ],
  declarations: [ChangeStockPage]
})
export class ChangeStockPageModule {}
