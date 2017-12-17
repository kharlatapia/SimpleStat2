import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExponencialPage } from './exponencial';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ExponencialPage,
  ],
  imports: [
    IonicPageModule.forChild(ExponencialPage),
    ChartsModule,
  ],
})
export class ExponencialPageModule {}
