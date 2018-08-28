import { QuestionTestVO } from "../question/question.test.vo";

export class MyAnswersheetVO{
    totalScore: number;
    myScore: number;
    questions: Array<QuestionTestVO>;
}