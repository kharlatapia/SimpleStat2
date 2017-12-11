import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BinomialPage } from './binomial';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BinomialPage,
  ],
  imports: [
    IonicPageModule.forChild(BinomialPage),
    ChartsModule,
  ],
})
export class BinomialPageModule {}
