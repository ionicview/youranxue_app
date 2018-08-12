import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ExamineViewPage } from './examine-view';

@NgModule({
  declarations: [
    ExamineViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamineViewPage),
  ],
})
export class ExamineViewPageModule {}
