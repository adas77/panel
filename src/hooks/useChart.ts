import { useEffect, useState } from 'react'

enum ChartViewType {
    DAY,
    WEEK,
    MONTH,
}

type ChartData = {
    name?: string
    date: Date
    tradingTurnover: number
    sold: number
}

const TRADING_TURNOVER_MAX = 3200
const SOLD_MAX = 420

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function genData(hours: number): ChartData[] {
    const nowMillis: number = Date.now()
    const hourToMillis: number = 60 * 60 * 1000
    const data: ChartData[] = []
    for (let index = 0; index < hours; index++) {
        // const date:ChartData = new Date(nowMillis - index * hourToMillis)
        const date: ChartData = {
            date: new Date(nowMillis - index * hourToMillis),
            tradingTurnover: getRandomInt(0, TRADING_TURNOVER_MAX),
            sold: getRandomInt(0, SOLD_MAX)
        }
        data[index] = date
    }
    return data

}
const useChart = () => {


    const fetchData = genData(10 * 24)

    const [data, setData] = useState<ChartData[]>([])
    const [chartView, setChartView] = useState<ChartViewType>(ChartViewType.DAY)
    const [showSecondChart, setShowSecondChart] = useState(false)
    const [linear, setLinear] = useState(true)

    const switchShowSecondChart = () => {
        setShowSecondChart(!showSecondChart)
    }

    const switchChartType = () => {
        setLinear(!linear)
    }

    const changeDay = () => {
        const update = fetchData
            .filter((d) => d.date.getTime() >= (Date.now() - 24 * 60 * 60 * 1000))
        // .map((d) => { return { ...d, date: d.date.getHours() } })
        setData(update)
        setChartView(ChartViewType.DAY)
    }

    const changeWeek = () => {
        const update = fetchData.filter((d) => d.date.getTime() >= (Date.now() - 7 * 24 * 60 * 60 * 1000))
        const updateWeek: ChartData[] = []
        let currDay = update.shift()?.date.getDay()
        let c = 0
        let sumTradingTurnover = 0
        let sumSold = 0
        update.forEach(d => {
            if (d.date.getDay() === currDay) {
                sumTradingTurnover += d.tradingTurnover
                sumSold += d.sold
            }
            else {
                updateWeek[c] = { name: d.date.getDay().toString(), date: d.date, sold: sumSold, tradingTurnover: sumTradingTurnover }
                sumTradingTurnover = 0
                sumSold = 0
                c += 1
                if (currDay) {
                    currDay -= 1
                }
            }
        });
        setData(updateWeek)
        setChartView(ChartViewType.WEEK)
    }

    return { data, chartView, changeDay, changeWeek, switchShowSecondChart, switchChartType, linear, showSecondChart }
}

export default useChart