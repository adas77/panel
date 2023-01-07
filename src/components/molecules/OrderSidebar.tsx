import React from 'react'
import Sidebar from '../atoms/Sidebar'

type Props = {}

const OrderSidebar = (props: Props) => {
    const fullPath=(childPath:string)=>{
        return `orders/${childPath}`
    }
    const data = [
        { label: 'Unpaid', path: '/unpaid', quantity: 4 },
        { label: 'Unsent', path: '/unsent' },
        { label: 'Returns', path: '/returns', quantity: 2 },
    ];
    return (
        <Sidebar data={data} />
    )
}

export default OrderSidebar