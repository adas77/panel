import { useEffect, useState } from 'react'
import { ChartData, ChartViewType } from '../types/ChartType'
import useAccount from './useAccount'
import { useSelector } from 'react-redux'
import { formatDate } from '../utils/format'

const useChart = () => {
    const { acc } = useAccount()
    const [acc1, isPolish] = useSelector((s: GlobalState) => {
        return [s.acc1, s.isPolish]
    })
    const DAY_IN_MILLIS = 24 * 60 * 60 * 1000

    const [data, setData] = useState<ChartData[]>([])
    const [chartView, setChartView] = useState<ChartViewType>(ChartViewType.DAY)
    const [sold, setSold] = useState(true)
    const [turnOver, setTurnOver] = useState(true)
    const [linear, setLinear] = useState(true)

    useEffect(() => {
        changeDay()
        return () => {
        }
    }, [acc1, isPolish])

    const switchChartType = () => {
        setLinear(!linear)
    }

    const changeDay = () => {
        const format = (d: Date) => ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)

        const updateDay = acc.charts
            .filter((d) => d.date.getTime() >= (Date.now() - DAY_IN_MILLIS))
            .map((d) => { return { ...d, name: formatDate(d.date, isPolish) } })

        updateDay.reverse()
        setData(updateDay)
        setChartView(ChartViewType.DAY)
    }

    const changeWeek = () => {
        const update = acc.charts.filter((d) => d.date.getTime() >= (Date.now() - 7 * DAY_IN_MILLIS))
        const updateWeek: ChartData[] = []
        let currTime = update.shift()?.date
        let sumTradingTurnover = 0
        let sumSold = 0
        update.forEach(d => {
            // TODO: fix
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

    return { data, chartView, changeDay, changeWeek, switchChartType, linear, setLinear, sold, setSold, turnOver, setTurnOver }
}

export default useChart