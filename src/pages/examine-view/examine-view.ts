import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { ExamineVO } from '../../components/model/examine/examine.vo';
import { QuestionTestVO } from '../../components/model/question/question.test.vo';
import { QuestionChoiceVO } from '../../components/model/question/question.choice.vo';
import { KatexOptions } from '../../../node_modules/ng-katex';

/**
 * Generated class for the ExamineViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examine-view',
  templateUrl: 'examine-view.html',
})
export class ExamineViewPage {

  equationTexString: string;
  testImg: string;
  title = 'ng-katex';
  url = 'https://github.com/garciparedes/ng-katex';
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';


  questionTest: QuestionTestVO;

  choiceList: Array<QuestionChoiceVO>;
  // fillblankList: Array<QuestionFillBlankVO>;
  // shortAnswerList: Array<QuestionShortAnswerVO>;


  options: KatexOptions = {
    displayMode: false,
  };

  testid: number;
  examine: ExamineVO;
  testService: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
   // this.examine = navParams.get('examine');
    //console.log("INWX");

  }
}
