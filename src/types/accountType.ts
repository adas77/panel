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

// import { order1, order2 } from "../data/order"
// import { chartData1, chartData2 } from "../data/chartDates"
// import { opinions1, opinions2 } from "../data/opinions"
// import { ranks1, ranks2 } from "../data/rank"
// import   {genOfferts,} from "../data/offerts"