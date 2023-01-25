import { useSelector } from "react-redux"
import { chartData1, chartData2 } from "../data/chartDates"
import { genOfferts } from "../data/offerts"
import { opinions1, opinions2 } from "../data/opinions"
import { order1, order2 } from "../data/order"
import { genRanks } from "../data/quality"
import { AccountType } from "../types/accountType"
import useLang from "./useLang"

const useAccount = () => {
    const { lang } = useLang()
    const [acc1] = useSelector((s: GlobalState) => {
        return [s.acc1]
    })

    const acc: AccountType = {
        orders: acc1 ? order1 : order2,
        charts: acc1 ? chartData1 : chartData2,
        opinions: acc1 ? opinions1 : opinions2,
        ranks: acc1 ? genRanks(lang.location, lang.prices, lang.delivery, lang.quality, lang.returns, lang.contact) : genRanks(lang.location, lang.prices, lang.delivery, lang.quality, lang.returns, lang.contact),
        offerts: acc1 ? genOfferts(35, lang.computer, lang.phone, lang.headphones, lang.tv, lang.keyboard) : genOfferts(35 * 2, lang.computer, lang.phone, lang.headphones, lang.tv, lang.keyboard)
    }

    return { acc }
}

export default useAccount