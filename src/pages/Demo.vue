<template>
    <div id="demo">
        <br/><br/><br/>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

        <div id="main" style="width: 100%;height:400px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts')

    export default {
        name: 'demo',
        data () {
            return {
                msg: 'this is a demo page'
            }
        },
        mounted () {
            var myChart = echarts.init(document.getElementById('main'));
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            myChart.setOption(option);
        }
    }
</script>

<style lang="scss">

</style>
