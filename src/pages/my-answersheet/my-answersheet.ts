import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MyAnswersheetVO } from '../../components/model/examine/my.answersheet.vo';
import { QuestionTestVO } from '../../components/model/question/question.test.vo';

/**
 * Generated class for the MyAnswersheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-answersheet',
  templateUrl: 'my-answersheet.html',
})
export class MyAnswersheetPage implements OnInit{
  myAnswerSheet: MyAnswersheetVO;
  questionTest: QuestionTestVO;
  ngOnInit(): void {
    this.myAnswerSheet = new MyAnswersheetVO();
    this.myAnswerSheet.myScore = 85;
    this.myAnswerSheet.totalScore = 100;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.questionTest = navParams.get('questionTest');
    console.log(this.questionTest);
  }

  ionViewDidLoad() {




    console.log('ionViewDidLoad MyAnswersheetPage');
  }

  close(questionId:number) {
    this.viewCtrl.dismiss(questionId);
  }


}
