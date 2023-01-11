import { ReactNode, useEffect } from 'react'
import useChart from '../../hooks/useChart'
import Chart from '../atoms/Chart'
import Widget from '../atoms/Widget'

type Props = {
    childComponent?: ReactNode
    switchTimeMillis?: number
}

const WidgetChart = (props: Props) => {
    const { data, linear, switchChartType } = useChart()
    const linearChart = <Chart linear={true} w={800} h={400} data={data} />
    const barChart = <Chart linear={false} w={800} h={400} data={data} />
    const SWITCH_TIME_MILLIS = props.switchTimeMillis || 3000

    const dejta={href:'/charts',title:'Wykresy',tags:['Wzrosty','Spadki']}

    useEffect(() => {
        const timer = setTimeout(() => {
            switchChartType()
        }, SWITCH_TIME_MILLIS);
        return () => clearTimeout(timer);
    }, [linear]);

    return (
        <>
            {linear ?
                <Widget childComponent={linearChart} href={dejta.href} title={dejta.title} tags={dejta.tags} />
                :
                <Widget childComponent={barChart} href={dejta.href} title={dejta.title} tags={dejta.tags} />
            }
        </>
    )
}

export default WidgetChart