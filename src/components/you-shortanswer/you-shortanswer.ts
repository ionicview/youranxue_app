import { Component, Input } from '@angular/core';
import { QuestionShortAnswerVO } from '../model/question/question.short.answer.vo';

/**
 * Generated class for the YouShortanswerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mdb-you-shortanswer',
  templateUrl: 'you-shortanswer.html'
})
export class YouShortanswerComponent {

  text: string;
  @Input() shortAnswerQuestionList: QuestionShortAnswerVO;
  constructor() {
    console.log('Hello YouShortanswerComponent Component');
    this.text = 'Hello World';
  }

}
