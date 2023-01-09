import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import useChart from '../../hooks/useChart';
import Navigation from "../molecules/Navigation";
import Button from "./Button";

const ChartLine = () => {
    const { data, changeDay, changeWeek, switchShowSecondChart, showSecondChart } = useChart()
    return (
        <>
            <Navigation />
            <Button variant='outline' onClick={e => changeDay()}>changeDay</Button>
            <Button variant='outline' onClick={e => changeWeek()}>changeWeek</Button>
            <Button variant='outline' onClick={e => switchShowSecondChart()}>switchShowSecondChart</Button>
            <LineChart
                width={1200}
                height={600}
                data={data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5
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

                {showSecondChart && <Line type="monotone" dataKey="tradingTurnover" stroke="#82ca9d" />}


            </LineChart>
            {data.map((d) => <p key={d.date.getTime()}>{d.date.toISOString().slice(0, 10)}</p>)}
        </>

    );
}
export default ChartLine