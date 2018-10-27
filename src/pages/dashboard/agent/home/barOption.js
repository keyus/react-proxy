let option = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //         type: 'lines'        // 默认为直线，可选为：'line' | 'shadow'
    //     },
    //     position: ['10%', '90%']
    // },
    legend: {
        data: ['付款数', '订单数'],
        // align: 'left',
        right: 10,

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
  
        type: 'category',

        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 46, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    yAxis: [
        {
            type: 'value',
            name: '付款数',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            max: 1200,
            min: 0,
        },
        {
            type: 'value',
            name: '订单数',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show:false,

            },
            max: 50,
            min: 0,
        },
    ],
    series: [
        {
            name: '付款数',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: '#569ef1'
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '订单数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                color: '#dfebf8'
            },
            data: [320, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330, 320]
        },

    ]
};

export default option