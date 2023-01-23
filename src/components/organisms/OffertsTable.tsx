import { useState } from 'react'
import { genOfferts } from '../../data/offerts'
import useLang from '../../hooks/useLang'
import { OffertsType } from '../../types/OffertsType'
import { RowData } from '../../types/TableType'
import Button from '../atoms/Button'
import Image from '../atoms/Image'
import Navigation from '../molecules/Navigation'
import Table from '../molecules/Table'

type Props = {}

const OffertsTable = (props: Props) => {
    const SHOW = 5

    const { lang } = useLang()
    const offerts = genOfferts(35, lang.computer, lang.phone, lang.headphones, lang.tv, lang.keyboard)

    const offertsFreq = offerts.sort((a, b) => { return b.turnover - a.turnover })
    const f = offertsFreq.slice(0, SHOW)

    const offertsLessFreq = offerts.sort((a, b) => { return b.views - a.views })
    const l = offertsLessFreq.slice(0, SHOW)

    const [freq, setFreq] = useState(true)

    

    const m = (img: string) => {
        return <div className="bg-0 bg-no-repeat bg-center"> <img className="bg-0 h-auto max-w-lg mx-auto bg-transparent w-12" src={img} alt="image description">
        </img></div>
    }
    const makeRow = (o: OffertsType) => {
        // return { items: [o.name, <Image src={o.img} />, o.sold, freq ? o.turnover : o.views] }
        return {
            items: [o.name, m(o.img)
                , o.sold, freq ? o.turnover : o.views]
        }
    }
    const rows: RowData[] = freq ? f.map((o: any) => makeRow(o)) : l.map((o: any) => makeRow(o))
    const cols = [lang.name, lang.photo, lang.sold, freq ? lang.turnOver : lang.views]


    return (
        <>
            <Navigation />
            <br />
            <br />
            <br />
            <br />
            <Button variant='outline' onClick={e => setFreq(!freq)}>change</Button>
            <Table cols={cols} rows={rows} />
        </>

    )
}

export default OffertsTable