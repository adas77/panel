import WidgetAdvice from '../organisms/WidgetAdvice'
import WidgetChart from '../organisms/WidgetChart'
import WidgetOfferts from '../organisms/WidgetOfferts'
import WidgetOpinions from '../organisms/WidgetOpinions'
import WidgetOrder from '../organisms/WidgetOrder'
import WidgetQuality from '../organisms/WidgetQuality'
import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <DefaultLayout>
            <Flex gap='small'>
                <WidgetOpinions />
                <WidgetChart />
                <WidgetOfferts />
                <WidgetQuality showWorst />
                <WidgetAdvice />
                <WidgetOrder />
            </Flex>
        </DefaultLayout>
    )
}

export default Widgets