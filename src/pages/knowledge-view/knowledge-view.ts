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

  ngColor = '#c23531';
  okColor = '#00C212';

  optionTreeMapTest = 
  {
    series: [{
      visibleMin: 300,
      label: {
          show: true,
          formatter: '{b}'
      },
      upperLabel: {
          normal: {
              show: true,
              height: 30
          }
      },
      itemStyle: {
          normal: {
              borderColor: '#fff'
          }
      },
      levels: [
          {
              // colorSaturation: [0.35, 0.5],
              itemStyle: {
                  normal: {
                      borderColor: '#777',
                      borderWidth: 0,
                      gapWidth: 1
                  }
              },
              upperLabel: {
                  normal: {
                      show: false
                  }
              }
          },
          {
              // colorSaturation: [0.35, 0.5],
              itemStyle: {
                  normal: {
                      borderColor: '#555',
                      borderWidth: 5,
                      gapWidth: 1
                  },
                  emphasis: {
                      borderColor: '#ddd'
                  }
              }
          },
          {
              // colorSaturation: [0.35, 0.5], //表示同一层级的节点的 颜色饱和度 选取范围。数值范围 0 ~ 1
              itemStyle: {
                  normal: {
                      borderWidth: 5,
                      gapWidth: 1,
                      borderColorSaturation: 0.6
                  }
              }
          }
      ],
      type: 'treemap',
      data:
        [
          {
          name: '用字母表示数',            // First tree
          value: 100,
          children: [{
            name: '用字母表示应用',       // First leaf of first tree
            value: 30,
            children:[{
               name: '用字母表示特征',       // First leaf of first tree
               value: 20,
               itemStyle: {
                 color: `${this.okColor}`
               }
              },{
               name: '用字母表示运算律',       // First leaf of first tree
               value: 30,
                itemStyle: {
                 color: `${this.ngColor}`
               }
              },{
               name: '用字母表示公式',       // First leaf of first tree
               value: 50,
                itemStyle: {
                 color: `${this.ngColor}` 
               }
              },
              ]
          }, {
            name: '列字母表达式',         // Second leaf of first tree
            value: 30,
            children:[{
               name: '列字母表达式的意义',       // First leaf of first tree
               value: 50,
                itemStyle: {
                 color: `${this.ngColor}` 
               }
              },{
               name: '列字母表达式的步骤',       // First leaf of first tree
               value: 50,
                itemStyle: {
                 color: `${this.ngColor}` 
               }
              }   
              ],
          }, {
            name: '列字母表达式应用',       // Second leaf of first tree
            value: 30,
            children:[{
               name: '变化规律',       // First leaf of first tree
               value: 10,
                itemStyle: {
                 color: `${this.okColor}` 
               }
              },{
               name: '阴影部分',       // First leaf of first tree
               value: 10,
                itemStyle: {
                 color: `${this.okColor}` 
               }
              },{
               name: '实际问题',       // First leaf of first tree
               value: 80,
                itemStyle: {
                 color: `${this.okColor}`
               }
              }]
          }]
        }, 
        {
          name: '代数式基本概念',            // Second tree
          value: 20,
          children: [{
            name: '代数的基本定义',       // Son of first tree
            value: 40,
             itemStyle: {
                 color: `${this.ngColor}`  
               }
            },
            {
            name: '代数的书写要求',       // Son of first tree
            value: 60,
             itemStyle: {
                 color: `${this.okColor}`  
               }
            }]
          }
         ]
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
