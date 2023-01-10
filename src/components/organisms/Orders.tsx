import Navigation from '../molecules/Navigation'
import OrderSidebar from '../molecules/OrderSidebar'
import OrderTable from './OrderTable'

type Props = {}

const Orders = (props: Props) => {
    return (
        <>
            <Navigation />
            <OrderSidebar />
            <OrderTable />
        </>
    )
}

export default Orders