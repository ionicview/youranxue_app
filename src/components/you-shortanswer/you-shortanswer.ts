import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello YouShortanswerComponent Component');
    this.text = 'Hello World';
  }

}
