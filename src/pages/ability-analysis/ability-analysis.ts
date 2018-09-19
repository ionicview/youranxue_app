import { AnalysisTestService } from './../../service/Analysis.test';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ECharts } from 'echarts-ng2';
import { JsonUtils } from '../../utils/JsonUtils';
import { RadarDataVO } from '../../components/model/analysis/radar-data.vo';

/**
 * Generated class for the AbilityAnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ability-analysis',
  templateUrl: 'ability-analysis.html',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AbilityAnalysisPage implements OnInit {

  @ViewChild('echarts') echarts: ECharts;
  option = {};
  option1 = {
    title: {
      text: '雷达图对比'
    },
    tooltip: {},
    legend: {
      data: ['自己', '平均数']
    },
    radar: {
      shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 4, 5]
        }
      },
      indicator: [
        { name: '整数的认识', max: 30 },
        { name: '整数的运算', max: 20 },
        { name: '对称', max: 10 },
        { name: '平移与旋转', max: 20 },
        { name: '平面几何', max: 20 }
      ]
    },
    series: [{
      name: '自己 - 平均数',
      type: 'radar',
      areaStyle: { normal: {} },
      data: [
        {
          value: [25, 20, 9, 20, 10],
          name: '自己'
        },
        {
          value: [20, 10, 7, 15, 13],
          name: '平均数'
        }
      ]
    }]
  };
  tableData: RadarDataVO = new RadarDataVO([], []);
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private analysisService: AnalysisTestService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbilityAnalysisPage');
  }

  ngOnInit(): void {
    this.analysisService.getTableDataMap().subscribe((tableData) => {
      this.tableData = tableData;
    });
    this.analysisService.getRadarOption().subscribe((option) => {
      this.option = option;
    });

  };

  onResize(e) {
    this.echarts.resize();
  }

}
