import OffertsTable from '../organisms/OffertsTable'
import DefaultLayout from '../template/DefaultLayout'
type Props = {}

const Rankings = (props: Props) => {
    return (
        <DefaultLayout>
            <OffertsTable showAll/>
        </DefaultLayout>
    )
}

export default Rankings