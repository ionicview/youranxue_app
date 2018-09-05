import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ECharts } from 'echarts-ng2';

/**
 * Generated class for the KnowledgeViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-knowledge-view',
  templateUrl: 'knowledge-view.html',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class KnowledgeViewPage {

  @ViewChild('echartsTreeMapTest') echartsTreeMapTest: ECharts;

  optionTreeMapTest = {
    series: [{
      type: 'treemap',
      data: [{
        name: 'nodeA',            // First tree
        value: 10,
        children: [{
          name: 'nodeAa',       // First leaf of first tree
          value: 4
        }, {
          name: 'nodeAb',       // Second leaf of first tree
          value: 6,
          itemStyle: {
            color: 'rgb(64, 255, 112)' //color rgb
          }
        }]
      }, {
        name: 'nodeB',            // Second tree
        value: 20,
        children: [{
          name: 'nodeBa',       // Son of first tree
          value: 20,
          children: [{
            name: 'nodeBa1',  // Granson of first tree
            value: 20,
            itemStyle: {
              color: '#c23531' //color #c23531
            }
          }]
        }]
      }]
    }]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowledgeViewPage');
  }
  onResize(e) {
    this.echartsTreeMapTest.resize();
  }
}
