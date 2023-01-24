import useAccount from '../../hooks/useAccount';
import useLang from '../../hooks/useLang';
import { OrderWidgetData } from '../../types/OrderType';
import Sidebar from '../atoms/Sidebar';
type Props = {}

const OrderSidebar = (props: Props) => {
    const { acc } = useAccount()
    const { lang } = useLang()
    const data: OrderWidgetData[] = [
        { label: lang.unpaid, path: 'orders/unpaid', quantity: acc.orders.unpaid.length },
        { label: lang.unsent, path: 'orders/unsent', quantity: acc.orders.unsent.length },
        { label: lang.returns, path: 'orders/returns', quantity: acc.orders.returns.length },
    ]
    return (
        <Sidebar data={data} />
    )
}

export default OrderSidebar