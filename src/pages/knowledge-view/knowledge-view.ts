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

    @ViewChild('echarts') echarts: ECharts;

    ngColor = '#c23531';
    okColor = '#00C212';

    option = {
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
            levels: this.getLevels(),
            type: 'treemap',
            data:
                [
                    {
                        name: '用字母表示数',
                        value: 100,
                        itemStyle: {
                            color: `${this.ngColor}`
                        },
                        children: [{
                            name: '用字母表示应用',
                            value: 30,
                            children: [{
                                name: '用字母表示特征',
                                value: 20,
                                itemStyle: {
                                    color: `${this.okColor}`
                                }
                            }, {
                                name: '用字母表示运算律',
                                value: 30,
                                itemStyle: {
                                    color: `${this.ngColor}`
                                }
                            }, {
                                name: '用字母表示公式',
                                value: 50,
                                itemStyle: {
                                    color: `${this.ngColor}`
                                }
                            },
                            ]
                        }, {
                            name: '列字母表达式',
                            value: 30,
                            itemStyle: {
                                color: `${this.ngColor}`
                            },
                            children: [{
                                name: '列字母表达式的意义',
                                value: 50,
                                itemStyle: {
                                    color: `${this.ngColor}`
                                }
                            }, {
                                name: '列字母表达式的步骤',
                                value: 50,
                                itemStyle: {
                                    color: `${this.ngColor}`
                                }
                            }
                            ],
                        }, {
                            name: '列字母表达式应用',
                            value: 30,
                            itemStyle: {
                                color: `${this.okColor}`
                            },
                            children: [{
                                name: '变化规律',
                                value: 10,
                                itemStyle: {
                                    color: `${this.okColor}`
                                }
                            }, {
                                name: '阴影部分',
                                value: 10,
                                itemStyle: {
                                    color: `${this.okColor}`
                                }
                            }, {
                                name: '实际问题',
                                value: 80,
                                itemStyle: {
                                    color: `${this.okColor}`
                                }
                            }]
                        }]
                    },
                    {
                        name: '代数式基本概念',
                        value: 20,
                        itemStyle: {
                            color: `${this.ngColor}`
                        },
                        children: [{
                            name: '代数的基本定义',
                            value: 40,
                            itemStyle: {
                                color: `${this.ngColor}`
                            }
                        },
                        {
                            name: '代数的书写要求',
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
        this.echarts.resize();
    }
    getLevels(): Array<any> {
        return [
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
        ]
    }
}
