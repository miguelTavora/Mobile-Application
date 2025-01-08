import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeStockPage } from './change-stock.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeStockPageRoutingModule {}
