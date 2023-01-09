import { ReactNode, useEffect } from 'react'
import useOpinons from '../../hooks/useOpinons'
import Opinion from '../molecules/Opinion'
import ChartLine from '../atoms/ChartLine'
import Widget from '../atoms/Widget'

type Props = {
    childComponent?: ReactNode
}

const WidgetOpinions = (props: Props) => {
    const { getOpinions, opinionFetchState } = useOpinons()

    useEffect(() => {
        getOpinions(3)
        return () => {
        }
    }, [])

    const opininons = opinionFetchState.map((o, i) => <Opinion key={i} widget src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} />)

    return (
        <Widget childComponent={opininons} href={'/opinions'} title={'Opinions'} tags={["Niskie ceny", "Wysoka jakość"]} />
    )
}

export default WidgetOpinions