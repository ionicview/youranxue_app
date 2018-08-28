import { MyAnswersheetPage } from './../my-answersheet/my-answersheet';
import { ExaminePage } from '../examine/examine';
import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  examineRoot = ExaminePage;
  tab1Root = HomePage;
  tab2Root = ProfilePage;
  test = MyAnswersheetPage;
  constructor() {

  }
}
