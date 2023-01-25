import { ReactNode, useEffect } from 'react'
import useLang from '../../hooks/useLang'
import useOpinons from '../../hooks/useOpinons'
import Opinion from '../molecules/Opinion'
import Widget from '../molecules/Widget'

type Props = {
    childComponent?: ReactNode
}

const WidgetOpinions = (props: Props) => {
    const { opinionFetchState, setOpinionState, switchNext, next } = useOpinons()
    const { lang } = useLang()

    useEffect(() => {
        setOpinionState("NEXT")
        const timer = setTimeout(() => {
            switchNext()
        }, 4000);
        return () => clearTimeout(timer);
    }, [next])

    return (
        <>
            <Widget childComponent={<>
                <div className="grid gap-2 grid-cols-1">
                    {opinionFetchState.map((o) => <Opinion key={o.id} widget src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} id={o.id} />)}
                </div>
            </>} title={lang.opinions} tags={[]} href={'/opinions'} tagsIncolumn />
        </>
    )
}

export default WidgetOpinions