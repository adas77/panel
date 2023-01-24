import { useSelector } from "react-redux"
import { order1, order2 } from "../data/order"
import { chartData1, chartData2 } from "../data/chartDates"
import { opinions1, opinions2 } from "../data/opinions"
import { ranks1, ranks2 } from "../data/rank"
import { AccountType } from "../types/accountType"
// import   {genOfferts,} from "../data/offerts"


const useAccount = () => {
    const [acc1] = useSelector((s: GlobalState) => {
        return [s.acc1]
    })



    const acc: AccountType = {
        orders: acc1 ? order1 : order2,
        charts: acc1 ? chartData1 : chartData2,
        opinions: acc1 ? opinions1 : opinions2,
        ranks: acc1 ? ranks1 : ranks2
    }


    return { acc }
}

export default useAccount