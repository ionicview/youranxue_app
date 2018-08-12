import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionTestVO } from '../../components/model/question/question.test.vo';
import { QuestionChoiceVO } from '../../components/model/question/question.choice.vo';
import { KatexOptions } from '../../../node_modules/ng-katex';
import { ExamineVO } from '../../components/model/examine/examine.vo';

/**
 * Generated class for the ViewExaminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-examine',
  templateUrl: 'view-examine.html',
})
export class ViewExaminePage {
  equationTexString: string;
  testImg: string;
  title = 'ng-katex';
  url = 'https://github.com/garciparedes/ng-katex';
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';

  questionTest: QuestionTestVO;

  choiceList: Array<QuestionChoiceVO>;
  options: KatexOptions = {
    displayMode: false,
  };
  
  testid: number;
  examine: ExamineVO;
  testService: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.examine = navParams.get('examine');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewExaminePage');
  }

}
