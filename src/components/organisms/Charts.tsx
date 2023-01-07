import React from 'react'
import Navigation from '../molecules/Navigation'
import Button from '../atoms/Button'
import useChart from '../../hooks/useChart'
import ChartLine from '../atoms/ChartLine'
import ChartBar from '../atoms/ChartBar'


const Charts = () => {
    const { switchChartType, linear } = useChart()
    return (
        <>
            <Navigation />
            <Button variant='outline' onClick={e => switchChartType()}>{linear ? 'Słupkowy' : 'Liniowy'}</Button>
            {linear ? <ChartLine /> : <ChartBar />}
        </>
    )
}

export default Charts