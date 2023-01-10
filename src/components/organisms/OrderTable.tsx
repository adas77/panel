import React from 'react'
import Table from '../molecules/Table'
import opinions from '../../data/opinions'
import { OpinionType } from '../../types/OpinionType'

type Props = {}

const OrderTable = (props: Props) => {
    type RowData = {
        items: string[]
    }

    const makeRow = (o: OpinionType) => {
        return { items: [o.alt, o.date.toUTCString(), o.id.toString(), o.name] }
    }
    const rows: RowData[] = opinions.map((o) => makeRow(o))
    const cols = ["alt", "date", "id", "name"]
    return (
        <Table cols={cols} rows={rows} />
    )
}

export default OrderTable