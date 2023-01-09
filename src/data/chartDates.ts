import getRandomInt from '../utils/rand'
import { ChartData, TRADING_TURNOVER_MAX, SOLD_MAX } from '../types/ChartType'

function genData(hours: number): ChartData[] {
    const nowMillis: number = Date.now()
    const hourToMillis: number = 60 * 60 * 1000
    const data: ChartData[] = []
    for (let index = 0; index < hours; index++) {
        const date: ChartData = {
            date: new Date(nowMillis - index * hourToMillis),
            tradingTurnover: getRandomInt(0, TRADING_TURNOVER_MAX),
            sold: getRandomInt(0, SOLD_MAX)
        }
        data[index] = date
    }
    return data

}

export const fetchChartData = genData(10 * 24)


