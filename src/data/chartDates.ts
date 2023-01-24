import { ChartData, SOLD_MAX, TRADING_TURNOVER_MAX } from '../types/ChartType'
import { getRandomInt } from '../utils/rand'

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

export const chartData1 = genData(10 * 24)
export const chartData2 = genData(3 * 24)
