import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChiPage } from './chi';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ChiPage,
  ],
  imports: [
    IonicPageModule.forChild(ChiPage),
    ChartsModule,
  ],
})
export class ChiPageModule {}
