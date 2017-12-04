import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BernoulliPage } from './bernoulli';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    BernoulliPage,
  ],
  imports: [
    IonicPageModule.forChild(BernoulliPage),
    ChartsModule,
  ],
})
export class BernoulliPageModule {}
