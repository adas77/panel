import DefaultLayout from '../template/DefaultLayout'
import OrderSidebar from '../molecules/OrderSidebar'
import OrderTable from '../organisms/OrderTable'
import { OrderStatus } from '../../types/OrderType'

type Props = {
    type: OrderStatus
}

const Orders = (props: Props) => {
    return (
        <DefaultLayout>
            {/* <OrderSidebar /> */}

            <OrderTable type={props.type} />
        </DefaultLayout>
    )
}

export default Orders