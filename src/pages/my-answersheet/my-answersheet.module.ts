import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAnswersheetPage } from './my-answersheet';

@NgModule({
  declarations: [
    MyAnswersheetPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAnswersheetPage),
  ],
})
export class MyAnswersheetPageModule {}
