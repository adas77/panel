import { useEffect } from 'react'
import Navigation from '../molecules/Navigation'
import WidgetChart from './WidgetChart'
import WidgetOpinions from './WidgetOpinions'
import useChart from '../../hooks/useChart'

type Props = {}

const Widgets = (props: Props) => {


    return (
        <>
            <Navigation />
            <div className='container flex flex-wrap gap-10'>
                <WidgetOpinions />
                <WidgetChart />
            </div>
        </>
    )
}

export default Widgets