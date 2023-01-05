import React from 'react'
import Sidebar from '../atoms/Sidebar'

type Props = {}

const OrderSidebar = (props: Props) => {
    const data = [
        { label: 'Unpaid', path: '/unpaid' },
        { label: 'Not Sent', path: '/notsent' },
        { label: 'Returns', path: '/returns' },
    ];
    return (
        <Sidebar data={data} />
    )
}

export default OrderSidebar