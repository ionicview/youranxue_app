import { Component, Input, OnInit } from '@angular/core';
import { QuestionChoiceVO } from '../model/question/question.choice.vo';
import { QuestionChoiceOptionVO } from '../model/question/question.choice.option.vo';



@Component({
  selector: 'mdb-you-choice',
  templateUrl: './you-choice.component.html',

})

export class YouChoiceComponent implements OnInit {
  @Input() choiceQuestionList: Array<QuestionChoiceVO>;

  constructor() { }

  ngOnInit() {

  }
  ionViewDidLoad() {
    console.log(this.choiceQuestionList);
  }

  optionSelected(selectedOption: QuestionChoiceOptionVO) {
    //alert("IN");
    console.log("selectedid:" + selectedOption.choiceId);

    console.log(this.choiceQuestionList[0].choiceOptionList[2].isSelected);
  }
}
