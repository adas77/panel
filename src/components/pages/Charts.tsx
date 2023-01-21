import useChart from '../../hooks/useChart'
import useLang from '../../hooks/useLang'
import DefaultLayout from '../template/DefaultLayout'
import Button from '../atoms/Button'
import Chart from '../atoms/Chart'


const Charts = () => {
    const { data, switchChartType, linear, changeWeek, changeDay } = useChart()
    const { lang } = useLang()
    return (
        <DefaultLayout>
            <Button variant='outline' onClick={e => switchChartType()}>{linear ? lang.bar : lang.linear}</Button>
            <Button variant='outline' onClick={e => changeWeek()}>{lang.week}</Button>
            <Button variant='outline' onClick={e => changeDay()}>{lang.day}</Button>
            {linear ? <Chart linear w={1200} h={600} data={data} /> : <Chart w={1200} h={600} data={data} />}
        </DefaultLayout>
    )
}

export default Charts