import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExaminePage } from './examine';

@NgModule({
  declarations: [
    ExaminePage,
  ],
  imports: [
    IonicPageModule.forChild(ExaminePage),
  ],
})
export class ExaminePageModule {}
