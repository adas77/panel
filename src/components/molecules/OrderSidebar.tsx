import useLang from '../../hooks/useLang';
import { OrderWidgetData } from '../../types/OrderType';
import Sidebar from '../atoms/Sidebar';
type Props = {}

const OrderSidebar = (props: Props) => {
    const { lang } = useLang()
    const data: OrderWidgetData[] = [
        { label: lang.unpaid, path: '/unpaid', quantity: 4 },
        { label: lang.unsent, path: '/unsent' },
        { label: lang.returns, path: '/returns', quantity: 2 },
    ]
    return (
        <Sidebar data={data} />
    )
}

export default OrderSidebar