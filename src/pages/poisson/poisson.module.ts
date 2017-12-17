import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoissonPage } from './poisson';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    PoissonPage,
  ],
  imports: [
    IonicPageModule.forChild(PoissonPage),
    ChartsModule
  ],
})
export class PoissonPageModule {}
