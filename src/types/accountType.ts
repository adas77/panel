import { ChartData } from "./ChartType";
import { OpinionType } from "./OpinionType";
import { OrderTypeData } from "./OrderType";
import { QualityType } from "./QualityType";

export type AccountType = {
    orders: {
        unpaid: OrderTypeData[],
        unsent: OrderTypeData[],
        returns: OrderTypeData[],
    },
    charts: ChartData[],
    opinions: OpinionType[],
    ranks: QualityType[],
    offerts: any[],
}
