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
import { ChartData } from "../../types/ChartType";

type Props = {
    linear?: boolean,
    turnOver?: boolean,
    sold?: boolean,
    data: ChartData[],
    w: number,
    h: number,
}

const Chart = (props: Props) => {
    const top: number = 50
    const right: number = 30
    const left: number = 20
    const bottom: number = 5
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
                    {props.sold && <Line
                        type="monotone"
                        dataKey="sold"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />}
                    {props.turnOver && <Line
                        type="monotone"
                        dataKey="tradingTurnover"
                        stroke="#82ca9d"
                        activeDot={{ r: 8 }}
                    />}

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
                    {props.sold && <Bar dataKey="sold" fill="#8884d8" />}
                    {props.turnOver && <Bar dataKey="tradingTurnover" fill="#82ca9d" />}
                </BarChart>
            }
        </>
    )
}

export default Chart