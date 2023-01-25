import useChart from '../../hooks/useChart'
import useLang from '../../hooks/useLang'
import DefaultLayout from '../template/DefaultLayout'
import Button from '../atoms/Button'
import Chart from '../atoms/Chart'
import Checkbox from '../atoms/Ckeckbox'
import Dropdown from '../atoms/Dropdown'
import { ChartViewType } from '../../types/ChartType'
import Flex from '../template/Flex'
import Ckeckbox from '../atoms/Ckeckbox'


const Charts = () => {
    const { data, switchChartType, linear, changeWeek, changeDay, setLinear, chartView, sold, setSold, turnOver, setTurnOver } = useChart()
    const { lang } = useLang()
    const width: number = 1600
    const height: number = 800
    return (
        <DefaultLayout>
            <Flex gap='small'>
                <div>
                    <Button onClick={() => setLinear(true)} variant={linear ? 'outline' : 'ghost'}>
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </Button>
                    <Button onClick={() => setLinear(false)} variant={linear ? 'ghost' : 'outline'}>
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </Button>
                </div>

                <div>
                    <Button variant={chartView === ChartViewType.WEEK ? 'outline' : 'ghost'} onClick={e => changeWeek()}>{lang.week}</Button>
                    <Button variant={chartView === ChartViewType.DAY ? 'outline' : 'ghost'} onClick={e => changeDay()}>{lang.day}</Button>
                </div>
                <div>
                    <Ckeckbox onClick={() => setTurnOver(!turnOver)} checked={turnOver} label={lang.turnOver} />
                    <Ckeckbox onClick={() => setSold(!sold)} checked={sold} label={lang.sold} />
                </div>
            </Flex>
            <Flex>

                {linear ? <Chart linear w={width} h={height} data={data} sold={sold} turnOver={turnOver} /> : <Chart w={width} h={height} data={data} sold={sold} turnOver={turnOver} />}
            </Flex>

        </DefaultLayout>
    )
}

export default Charts