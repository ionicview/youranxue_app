export class QuestionChoiceOptionVO {
  choiceId: number;
  sequenceNo: number;
  choiceItem: string;
  imgList: Array<string>;
  isRightAnswer: boolean;
  isSelected: boolean;
  status: string = "'unselected'";

  checkStatus() {
    if (this.isRightAnswer) {
      this.status = 'mySelectionIsRight';
    } else if (!this.isSelected && !this.isRightAnswer) {
      this.status = 'unselected';
    } else if (this.isSelected && !this.isRightAnswer){
      this.status = 'mySelectionIsWrong';
    }
  }

  


}
