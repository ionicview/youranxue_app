import { ExamineService } from '../../service/examine.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { KatexOptions } from 'ng-katex';
import { ExamineGroupVO } from '../../components/model/examine/examine.group.vo';
import { ExamineVO } from '../../components/model/examine/examine.vo';

/**
 * Generated class for the ExaminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examine',
  templateUrl: 'examine.html',
})
export class ExaminePage {

  examineGroupList: Array<ExamineGroupVO>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public examineService: ExamineService) {
  }

  ionViewDidLoad() {
    this.examineGroupList = [];
    this.examineService.getExamines().subscribe((allExamines: Array<ExamineGroupVO>) => {

      allExamines.forEach(examine => {
        const examineGroupVO = new ExamineGroupVO(examine.examineGroupId, examine.examineGroupName, examine.examineList);
        this.examineGroupList.push(examineGroupVO);
      });
    });
  }

  equation: string = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
  options: KatexOptions = {
    displayMode: true,
  };

  viewMyExamine(examine: ExamineVO){
     console.log("ID"+examine.examineId);
     console.log("Name"+examine.examineName);
  }


}
