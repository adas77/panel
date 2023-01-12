import Navigation from '../molecules/Navigation'
import WidgetChart from './WidgetChart'
import WidgetOpinions from './WidgetOpinions'
import WidgetOrder from './WidgetOrder'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <>
            <Navigation />
            <div className='container flex flex-wrap gap-10'>
                <WidgetOpinions />
                <WidgetChart />
                <WidgetOrder />
            </div>
        </>
    )
}

export default Widgets