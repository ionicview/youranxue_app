import { QuestionChoiceOptionVO } from './question.choice.option.vo';

export class QuestionChoiceVO {
    questionId: number;
    questionNo: number;
    question: string;
    isMyAnswerRight: boolean;
    imgList: Array<string>;
    choiceOptionList: Array<QuestionChoiceOptionVO>;
}
