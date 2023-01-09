import { useEffect, useState } from 'react'
import { fetchChartData } from '../data/chartDates'
import { ChartData, ChartViewType } from '../types/ChartType'

const useChart = () => {

    const DAY_IN_MILLIS = 24 * 60 * 60 * 1000

    const [data, setData] = useState<ChartData[]>([])
    const [chartView, setChartView] = useState<ChartViewType>(ChartViewType.DAY)
    const [showSecondChart, setShowSecondChart] = useState(false)
    const [linear, setLinear] = useState(true)
    const [rerenderInTime, setRerenderInTime] = useState<number>(-1)

    useEffect(() => {
        changeDay()

        return () => {
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            rerenderInTime > 0 && setLinear(!linear)
        }, rerenderInTime);
        return () => clearTimeout(timer);
    }, [linear]);

    const switchShowSecondChart = () => {
        setShowSecondChart(!showSecondChart)
    }

    const switchChartType = () => {
        setLinear(!linear)
    }

    const switchInTime = (millis: number) => {
        setRerenderInTime(millis)

    }

    const changeDay = () => {
        const format = (d: Date) => ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)

        const updateDay = fetchChartData
            .filter((d) => d.date.getTime() >= (Date.now() - DAY_IN_MILLIS))
            .map((d) => { return { ...d, name: format(d.date) } })

        updateDay.reverse()
        setData(updateDay)
        setChartView(ChartViewType.DAY)
    }

    const changeWeek = () => {
        const update = fetchChartData.
            filter((d) => d.date.getTime() >= (Date.now() - 7 * DAY_IN_MILLIS))
        const updateWeek: ChartData[] = []
        let currTime = update.shift()?.date
        let sumTradingTurnover = 0
        let sumSold = 0
        update.forEach(d => {
            if (d.date.getDay() === currTime?.getDay()) {
                sumTradingTurnover += d.tradingTurnover
                sumSold += d.sold
            }
            else {
                const a = { name: d.date.toLocaleDateString("en-US"), date: d.date, sold: sumSold, tradingTurnover: sumTradingTurnover }
                updateWeek.push(a)
                sumTradingTurnover = 0
                sumSold = 0
                if (currTime) {
                    currTime.setTime(currTime.getTime() - DAY_IN_MILLIS)
                }

            }
        });
        updateWeek.reverse()
        setData(updateWeek)
        setChartView(ChartViewType.WEEK)
    }

    return { data, chartView, changeDay, changeWeek, switchShowSecondChart, switchChartType, switchInTime, linear, showSecondChart }
}

export default useChart