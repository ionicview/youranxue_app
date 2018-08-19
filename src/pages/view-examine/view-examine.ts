import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionTestVO } from '../../components/model/question/question.test.vo';
import { QuestionChoiceVO } from '../../components/model/question/question.choice.vo';
import { KatexOptions } from '../../../node_modules/ng-katex';
import { ExamineVO } from '../../components/model/examine/examine.vo';
import { TestService } from '../../service/test.service';
import { QuestionFillBlankVO } from '../../components/model/question/question.fillblank.vo';

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

  fillblankList: Array<QuestionFillBlankVO>;

  options: KatexOptions = {
    displayMode: false,
  };

  testid: number;
  examine: ExamineVO;

  constructor(public navCtrl: NavController, public navParams: NavParams, private testService: TestService) {
    this.examine = navParams.get('examine');
  }

  ionViewDidLoad() {
    // 此处必须初始化，否则会空指针
    this.fillblankList = [];

    this.testService.getAllTestQuestionsByTestId(this.examine.examineId).subscribe((questions: QuestionTestVO) => {
      // 选择题
      this.choiceList = questions.choiceList;
      questions.fillblankList.forEach((fillBlank: QuestionFillBlankVO) => {
        // 将从服务器端接收到的数据，变换为画面端Object
        // QuestionFillBlankVO的构造函数会将接收到题目转换为画面可显示结构

        const fillBlankVO = new QuestionFillBlankVO(fillBlank.fillblankId, fillBlank.question, fillBlank.blankList, fillBlank.imgList);
        this.fillblankList.push(fillBlankVO);
      });
      console.log("Fill Blank Length:"+this.fillblankList.length);
    });
  }

}
