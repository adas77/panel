import DefaultLayout from '../template/DefaultLayout'
import OrderSidebar from '../molecules/OrderSidebar'
import OrderTable from '../organisms/OrderTable'

type Props = {}

const Orders = (props: Props) => {
    return (
        <DefaultLayout>
            <OrderSidebar />
            <OrderTable />
        </DefaultLayout>
    )
}

export default Orders