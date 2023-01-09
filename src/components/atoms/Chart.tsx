import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import useChart from '../../hooks/useChart';
import { useEffect } from "react";
import { ChartData } from "../../types/ChartType";

type Props = {
    linear?: boolean,
    data: ChartData[],
    w: number,
    h: number,
    // data: ChartData[]
}

const Chart = (props: Props) => {
    // const { data, linear, changeDay, changeWeek, switchShowSecondChart, switchInTime, showSecondChart } = useChart()
    const top: number = 50
    const right: number = 30
    const left: number = 20
    const bottom: number = 5
    // const chartType = props.doSwitchInTime || props.linear
    
    //     useEffect(() => {
    //         props.doSwitchInTime && switchInTime(3000)
    //         return () => {
    //         }
    //     }, [data, linear])
    

    return (
        <>

            {props.linear ?
                <LineChart
                    width={props.w}
                    height={props.h}
                    data={props.data}
                    margin={{
                        top: top,
                        right: right,
                        left: left,
                        bottom: bottom
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="sold"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
                :
                <BarChart
                    width={props.w}
                    height={props.h}
                    data={props.data}
                    margin={{
                        top: top,
                        right: right,
                        left: left,
                        bottom: bottom
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sold" fill="#8884d8" />
                    <Bar dataKey="tradingTurnover" fill="#82ca9d" />
                </BarChart>
            }
            {/* {showSecondChart && <Line type="monotone" dataKey="tradingTurnover" stroke="#82ca9d" />} */}
            {/* {data.map((d) => <p key={d.date.getTime()}>{d.date.toISOString().slice(0, 10)}</p>)} */}
        </>

    )
}

export default Chart