import { QuestionAnswerVO } from "./question.answer.vo";

export class QuestionShortAnswerSubQuestionVO {
    subQuestionId: number;
    sequenceNo: number;
    shortAnswerContent: string;
    images: Array<string>;
    answer: QuestionAnswerVO;
}