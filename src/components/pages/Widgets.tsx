import DefaultLayout from '../_layout/DefaultLayout'
import Navigation from '../molecules/Navigation'
import WidgetChart from '../organisms/WidgetChart'
import WidgetOpinions from '../organisms/WidgetOpinions'
import WidgetOrder from '../organisms/WidgetOrder'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <DefaultLayout>
            <div className='container mx-auto flex flex-wrap gap-12'>
                <WidgetOpinions />
                <WidgetChart />
                <WidgetOrder />
            </div>
        </DefaultLayout>
    )
}

export default Widgets