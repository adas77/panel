import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
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

            <BarChart
                width={1200}
                height={600}
                data={data}
                margin={{
                    top: 5,
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
                <Bar dataKey="sold" fill="#8884d8" />
                <Bar dataKey="tradingTurnover" fill="#82ca9d" />
            </BarChart>
        </>

    );
}
export default ChartLine