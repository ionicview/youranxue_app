import { QuestionShortAnswerSubQuestionVO } from "./question.short.answer.subquestion.vo";
import { QuestionAnswerVO } from "./question.answer.vo";

export class QuestionShortAnswerVO {
    shortAnswerId: number;
    shortAnswerContent: string;
    images: Array<string>;
    subQuestionList: Array<QuestionShortAnswerSubQuestionVO>;
    answer: QuestionAnswerVO;
}
