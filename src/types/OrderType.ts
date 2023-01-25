
export type OrderWidgetData = {
    quantity: number,
    label: string,
    path: string,
}

export type OrderTypeData = {
    orderNumber: number,
    buyer: string,
    quantity: number,
    dateBought: Date,
    datePaid?: Date,
    dateSent?: Date,
    returned?: boolean,
}

export type OrderStatus = 'UNPAID' | 'UNSENT' | 'RETURN'
