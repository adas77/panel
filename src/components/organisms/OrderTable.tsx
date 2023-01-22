import opinions from '../../data/opinions'
import useLang from '../../hooks/useLang'
import { OpinionType } from '../../types/OpinionType'
import Image from '../atoms/Image'
import dog from "../atoms/img/dog.jpg"
import Table from '../molecules/Table'
import { RowData } from '../../types/TableType'

type Props = {}

const OrderTable = (props: Props) => {
    const { lang } = useLang()


    const makeRow = (o: OpinionType) => {
        return { items: [<Image src={dog} />, <Image src={dog} />, <Image src={dog} />, o.date.toUTCString(), o.id.toString(), o.name] }
    }
    const rows: RowData[] = opinions.map((o) => makeRow(o))
    const cols = ["alt", "alt", "alt", lang.date, "ID", lang.name]
    return (
        <Table cols={cols} rows={rows} />
    )
}

export default OrderTable