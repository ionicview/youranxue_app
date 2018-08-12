import { Component } from '@angular/core';

/**
 * Generated class for the TttComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ttt',
  templateUrl: 'ttt.html'
})
export class TttComponent {

  text: string;

  constructor() {
    console.log('Hello TttComponent Component');
    this.text = 'Hello World TTT';
  }

}
