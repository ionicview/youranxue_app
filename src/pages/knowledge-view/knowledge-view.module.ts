import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowledgeViewPage } from './knowledge-view';

@NgModule({
  declarations: [
    KnowledgeViewPage,
  ],
  imports: [
    IonicPageModule.forChild(KnowledgeViewPage),
  ],
})
export class KnowledgeViewPageModule {}
