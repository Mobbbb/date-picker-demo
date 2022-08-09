const getOption = (data, chart) => {
    return {
        legend: {
            show: false,
        },
        grid: {
            top: '5%',
            bottom: 0,
            left: 0,
            right: 0,
            containLabel: true,
        },
        xAxis: [
            {
                data: [1,2,3],
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 8,
                        color: '#262626',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ebebeb',
                        width: 1,
                        // *$坐标线延长线
                        shadowOffsetX: 14,
                        shadowColor: '#ebebeb',
                    },
                },
            },
            {
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ebebeb',
                        width: 1,
                        // *$坐标轴负方向延长线
                        shadowOffsetX: -14,
                        shadowColor: '#ebebeb',
                    },
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    margin: 10,
                    // *$修改 axisTick 颜色
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 8,
                        color: (value) => {
                            // *$隐藏0坐标
                            return value > 0 ? '#262626' : 'rgba(0, 0, 0, 0)'
                        }
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ebebeb',
                        width: 1,
                        shadowOffsetY: -14,
                        shadowColor: '#ebebeb',
                    },
                },
                splitLine: {
                    show: false,
                },
            },
            {}, // *$坐标轴负方向延长线
        ],
        series: [{
            type: 'bar',
            data: [1, 2, 3],
            barWidth: 40,
            itemStyle: {
                color: '#6699ff',
            },
        }],
    }
}
