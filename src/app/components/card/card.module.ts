import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [CardComponent]
})
export class CardModule { }
