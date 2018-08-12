import { ExamineVO } from "./examine.vo";

export class ExamineGroupVO {
    examineGroupId: number;
    examineGroupName: String;
    examineList: Array<ExamineVO>;

    constructor(examineGroupId: number,examineGroupName: String,examineList: Array<ExamineVO>){

        this.examineGroupId = examineGroupId;
        this.examineGroupName = examineGroupName;
        this.examineList = examineList;
    }
}
