// let chartDom = document.getElementsByClassName('chart')[0]
// let myChart = echarts.init(chartDom)
// let option = getOption([], myChart)
// myChart.setOption(option)

const app = Vue.createApp({
    data() {
        const date = new Date()

        const shortcuts = []
        for (let i = 5; i > 0; i--) {
            const currentYear = date.getFullYear() + 1 - i
            shortcuts.unshift({
                text: `${currentYear}年`,
                value: [new Date(currentYear, 0, 1), new Date(currentYear, 11, 31)],
            })
        }

        return {
            dateRange: [new Date(date.getFullYear(), 0, 1), new Date(date.getFullYear(), 11, 31)],
            shortcuts,
        }
    },   
})
app.use(ElementPlus, {
    locale: ElementPlusLocaleZhCn
})
app.mount('#app')
