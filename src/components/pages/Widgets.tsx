import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'
import WidgetChart from '../organisms/WidgetChart'
import WidgetOpinions from '../organisms/WidgetOpinions'
import WidgetOrder from '../organisms/WidgetOrder'
import WidgetRankings from '../organisms/WidgetRankings'
import OffertsTable from '../organisms/OffertsTable'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <DefaultLayout>
            <Flex>
                <WidgetOpinions />
                <WidgetChart />
                <WidgetOrder />
                <WidgetRankings />
            </Flex>
        </DefaultLayout>
    )
}

export default Widgets