import { useSelector } from 'react-redux'
import useAccount from '../../hooks/useAccount'
import useLang from '../../hooks/useLang'
import { OrderStatus, OrderTypeData } from '../../types/OrderType'
import { formatDate } from '../../utils/format'
import Table from '../molecules/Table'
import Alert from '../atoms/Alert'

type Props = {
    type: OrderStatus
}

const OrderTable = (props: Props) => {
    const { lang } = useLang()
    const { acc } = useAccount()
    const [isPolish] = useSelector((s: GlobalState) => {
        return [s.isPolish]
    })
    let orders
    console.log(acc)
    console.log("props", props)
    if (props.type === 'RETURN') {
        orders = acc.orders.returns
    } else if (props.type === 'UNPAID') {
        orders = acc.orders.unpaid
    } else if (props.type === 'UNSENT') {
        orders = acc.orders.unsent
    }

    console.log("orders", orders)

    const makeRow = (o: OrderTypeData) => {
        return {
            items: [o.orderNumber.toString(), o.buyer, o.quantity, formatDate(o.dateBought, isPolish),
            (props.type === 'UNPAID' || props.type === 'RETURN') && formatDate(o.datePaid || new Date(), isPolish),
            props.type === 'RETURN' && formatDate(o.dateSent || new Date(), isPolish)]
        }
    }

    // if (orders) {
    //     const rows: RowData[] = orders.map((o) => makeRow(o))
    //     const cols = ["orderNumber", "buyer", "quantity", "dateBought", "datePaid", "dateSent", "returned"]

    // }


    return (
        (orders && orders.length > 0) ? <Table cols={["orderNumber", "buyer", "quantity", "dateBought", "datePaid", "dateSent", "returned"]} rows={orders.map((o) => makeRow(o))} />
            :
            <>
                <Alert msg={'Zacznij handlować!!! '} w={'neutral'} name={'Brak obecnie Aukcji'} comment={'Niedobrze...'} />
            </>
    )
}

export default OrderTable