import useChart from '../../hooks/useChart'
import Button from '../atoms/Button'
import Chart from '../atoms/Chart'
import Navigation from '../molecules/Navigation'


const Charts = () => {
    const { data, switchChartType, linear, changeWeek, changeDay } = useChart()
    return (
        <>
            <Navigation />
            <Button variant='outline' onClick={e => switchChartType()}>{linear ? 'Słupkowy' : 'Liniowy'}</Button>
            <Button variant='outline' onClick={e => changeWeek()}>Week</Button>
            <Button variant='outline' onClick={e => changeDay()}>Day</Button>
            {linear ? <Chart linear w={1200} h={600} data={data} /> : <Chart w={1200} h={600} data={data} />}
        </>
    )
}

export default Charts