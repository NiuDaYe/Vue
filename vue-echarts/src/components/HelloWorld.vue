<template>
  <div class="hello" id="main" style="width:600px;height:600px;">
      <p>asdfsadf</p>
  </div>
</template>

<script>
import Vue from 'vue'
let echarts = require('echarts')
require('echarts/chart/force')
export default {
    data(){
        return {

        }
    },
    mounted(){
        this.drawLine();
    },
    methods:{
        drawLine(){
            // 基于准备好的dom，初始化echarts图表
                let myChart = this.$echarts.init(document.getElementById('main'))

                var option = {
                        tooltip : {
                            trigger: 'item',
                            formatter: '{b}'
                        },
                        series : [
                            {
                                type:'force',
                                name : "人物关系",
                                ribbonType: false,
                                categories : [
                                    {
                                        name: '人物',
                                        // symbol:'image://image/3.png',
                                        symbol:'11',

                                    },
                                    {
                                        name: '家人',
                                        symbol:'image://image/2.png',
                                        symbolSize: [20, 16],
                                    },
                                    {
                                        name:'朋友',
                                        symbol:'image://image/1.png',
                                        symbolSize: [20, 16],
                                    }
                                ],
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            position: 'bottom',
                                            textStyle: {
                                                color: '#fff',
                                                paddingTop:140
                                            }
                                        },
                                        nodeStyle : {
                                            brushType : 'both',
                                            borderColor : 'rgba(255,215,0,0.4)',
                                            borderWidth : 4
                                        }
                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                                        },
                                        nodeStyle : {
                                            //r: 30
                                        },
                                        linkStyle : {}
                                    }
                                },
                                minRadius : 15,
                                maxRadius : 25,
                                gravity: 1.1,
                                scaling: 1.4,
                                linkSymbol: 'arrow',
                                steps: 10,
                                coolDown: 0.9,
                                preventOverlap: true,
                                draggable: true,
                                position: 'bottom',

                                // category为0 是关联最多的
                                // category为1 是红色标识
                                // category为2 正常标识

                                nodes:[
                                    {category:0, name: '主服务', value : 1},
                                    {category:1,name: '磁盘爆满1'},
                                    {category:1,name: '磁盘爆满2'},
                                    {category:1,name: '磁盘爆满3'},
                                    {category:1, name: '磁盘爆满4'},
                                    {category:2,name: '服务器1'},
                                    {category:2,name: '服务器2'},
                                    {category:2,name: '服务器3'},
                                    {category:2,name: '服务器4'},
                                    {category:2, name: '服务器5'},
                                    {category:2,name: '服务器6'},
                                ],
                                links : [
                                    {source : '磁盘爆满1', target : '主服务'},
                                    {source : '主服务', target : '磁盘爆满1'},
                                    {source : '磁盘爆满2', target : '主服务'},
                                    {source : '磁盘爆满3', target : '主服务'},
                                    {source : '磁盘爆满4', target : '主服务',},
                                    {source : '服务器1', target : '主服务'},
                                    {source : '服务器2', target : '主服务'},
                                    {source : '服务器3', target : '主服务'},
                                    {source : '服务器4', target : '主服务'},
                                    {source : '服务器5', target : '主服务'},
                                    {source : '服务器6', target : '主服务'},
                                    {source : '磁盘爆满3', target : '磁盘爆满2'},
                                    {source : '服务器2', target : '磁盘爆满2'},
                                    {source : '服务器2', target : '磁盘爆满3'},
                                    {source : '服务器2', target : '磁盘爆满4'},
                                    {source : '奥巴马', target : '服务器1'},
                                    {source : '服务器3', target : '服务器2'},
                                    {source : '服务器3', target : '磁盘爆满3'},
                                    {source : '服务器5', target : '服务器2'}
                                ]
                            }
                        ]
                };

                // option.series[0].categories[0].symbol = "image://image/2.png"
                // Vue.set(option.series[0].categories[0].symbol,'image/2.png')
                // 为echarts对象加载数据
                myChart.setOption(option);
        }
    },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
