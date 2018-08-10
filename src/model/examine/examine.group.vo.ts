import { ExamineVO } from "./examine.vo";

export class ExamineGroupVO {
    examineGroupId: number;
    examineGroupName: String;
    examineList: Array<ExamineVO>;
}
