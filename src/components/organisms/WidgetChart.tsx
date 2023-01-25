import { ReactNode, useEffect } from 'react'
import useChart from '../../hooks/useChart'
import Chart from '../atoms/Chart'
import Widget from '../molecules/Widget'
import useLang from '../../hooks/useLang'

type Props = {
    childComponent?: ReactNode
    switchTimeMillis?: number
}

const WidgetChart = (props: Props) => {
    const { data, linear, switchChartType } = useChart()
    const { lang } = useLang()
    const w: number = 800
    const h: number = 500
    const linearChart = <Chart linear={true} w={w} h={h} data={data} sold turnOver />
    const barChart = <Chart linear={false} w={w} h={h} data={data} sold turnOver />
    const SWITCH_TIME_MILLIS = props.switchTimeMillis || 3000

    const dejta = { href: '/charts', title: lang.charts, tags: [lang.dynamicChanges, lang.timeToInvest] }

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