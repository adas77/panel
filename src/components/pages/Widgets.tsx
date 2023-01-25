import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'
import WidgetChart from '../organisms/WidgetChart'
import WidgetOpinions from '../organisms/WidgetOpinions'
import WidgetOrder from '../organisms/WidgetOrder'
import WidgetRankings from '../organisms/WidgetQuality'
import WidgetOfferts from '../organisms/WidgetOfferts'
import OffertsTable from '../organisms/OffertsTable'
import WidgetQuality from '../organisms/WidgetQuality'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <DefaultLayout>
            <Flex gap='small'>
                <WidgetOpinions />
                <WidgetChart />
                <WidgetOfferts/>
                <WidgetQuality showWorst />
                <WidgetOrder />

                {/* <OffertsTable /> */}
            </Flex>
        </DefaultLayout>
    )
}

export default Widgets