import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TstudentPage } from './tstudent';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    TstudentPage,
  ],
  imports: [
    IonicPageModule.forChild(TstudentPage),
    ChartsModule,
  ],
})
export class TstudentPageModule {}
