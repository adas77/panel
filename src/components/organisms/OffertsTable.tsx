import { useState } from 'react'
import { genOfferts } from '../../data/offerts'
import useLang from '../../hooks/useLang'
import useOfferts from '../../hooks/useOfferts'
import { OffertsType } from '../../types/OffertsType'
import { RowData } from '../../types/TableType'
import Button from '../atoms/Button'
import Image from '../atoms/Image'
import Table from '../molecules/Table'
import Flex from '../template/Flex'

type Props = {
    showAll?: boolean
}

const OffertsTable = (props: Props) => {

    const { lang } = useLang()
    const { o, freq, setFreq } = useOfferts(props.showAll)

    const m = (img: string) => {
        return <div className="bg-0 bg-no-repeat bg-center">
            <Image size='small' src={img} />
        </div>
    }
    const makeRow = (o: OffertsType) => {
        return {
            items: [o.name, m(o.img)
                , o.sold, freq ? o.turnover : o.views]
        }
    }
    const rows: RowData[] = o.map((o: any) => makeRow(o))
    const cols = [lang.name, lang.photo, lang.sold, freq ? lang.turnOver : lang.views]

    return (
        <>
            <Flex>
                <div>
                    <Button variant={freq ? 'outline' : 'ghost'} onClick={() => setFreq(!freq)}>{lang.mostPopular}</Button>
                    <Button variant={freq ? 'ghost' : 'outline'} onClick={() => setFreq(!freq)}>{lang.lessPopular}</Button>
                </div>
            </Flex>
            <br />
            <Table cols={cols} rows={rows} />
        </>

    )
}

export default OffertsTable