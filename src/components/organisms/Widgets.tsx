import Navigation from '../molecules/Navigation'
import ProgressBar from '../atoms/ProgressBar'
import WidgetChart from './WidgetChart'
import WidgetOpinions from './WidgetOpinions'
import WidgetOrder from './WidgetOrder'
import WidgetQuality from './WidgetQuality'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <>
            <Navigation />
            <div className='container flex flex-wrap gap-10'>
                <WidgetOpinions />
                <WidgetChart />
                {/* <ProgressBar percent={80} />
                <WidgetOrder />
                <WidgetQuality /> */}
            </div>
        </>
    )
}

export default Widgets