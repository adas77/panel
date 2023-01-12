import opinions from '../../data/opinions'
import useLang from '../../hooks/useLang'
import { OpinionType } from '../../types/OpinionType'
import Table from '../molecules/Table'

type Props = {}

const OrderTable = (props: Props) => {
    const { lang } = useLang()
    type RowData = {
        items: string[]
    }

    const makeRow = (o: OpinionType) => {
        return { items: [o.alt, o.date.toUTCString(), o.id.toString(), o.name] }
    }
    const rows: RowData[] = opinions.map((o) => makeRow(o))
    const cols = ["alt", lang.date, "ID", lang.name]
    return (
        <Table cols={cols} rows={rows} />
    )
}

export default OrderTable