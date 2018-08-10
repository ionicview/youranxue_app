import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { KatexOptions } from 'ng-katex';
import { ExamineGroupVO } from '../../model/examine/examine.group.vo';
/**
 * Generated class for the ExaminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examine',
  templateUrl: 'examine.html',
})
export class ExaminePage {

  examineGroupList: Array<ExamineGroupVO>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExaminePage');
  }

  equation: string = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
  options: KatexOptions = {
    displayMode: true,
  };



}
