import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalPage } from './normal';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    NormalPage,
  ],
  imports: [
    IonicPageModule.forChild(NormalPage),
    ChartsModule,
  ],
})
export class NormalPageModule {}
