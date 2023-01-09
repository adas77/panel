export enum ChartViewType {
    DAY,
    WEEK,
    MONTH,
}

export type ChartData = {
    name?: string
    date: Date
    tradingTurnover: number
    sold: number
}

export const TRADING_TURNOVER_MAX = 3200
export const SOLD_MAX = 420
