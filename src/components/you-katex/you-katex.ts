import { Component, OnInit, Input } from '@angular/core';

/**
 * Generated class for the YouKatexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mdb-you-katex',
  templateUrl: 'you-katex.html'
})
export class YouKatexComponent implements OnInit {

  @Input() latex: string;
  latexList: Array<string>;
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // this.latex = ' 如果$a \\ne 0$, $ax^2 + bx + c = 0$ 将会有两个解，他们是 $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$ ';
    console.log(this.latex);
    this.latexList = this.latex.split('$');
    console.log(this.latexList);
  }

}