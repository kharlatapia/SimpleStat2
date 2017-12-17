import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HipergeometricaPage } from './hipergeometrica';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HipergeometricaPage,
  ],
  imports: [
    IonicPageModule.forChild(HipergeometricaPage),
    ChartsModule
  ],
})
export class HipergeometricaPageModule {}
