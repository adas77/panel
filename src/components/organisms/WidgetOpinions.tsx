import { ReactNode, useEffect } from 'react'
import useOpinons, { OpinionFetchState } from '../../hooks/useOpinons'
import Widget from '../atoms/Widget'
import Opinion from '../molecules/Opinion'

type Props = {
    childComponent?: ReactNode
}

const WidgetOpinions = (props: Props) => {
    const { getOpinions, opinionFetchState, nextOpinions, prevOpinions, currentReview } = useOpinons()

    useEffect(() => {
        getOpinions(false, OpinionFetchState.WIDGET)
        return () => {
        }
    }, [])

    const rev = currentReview >= 4 ? ["Super", "Zadowoenie"] : currentReview >= 3 ? ["Nie jest źle"] : ["Niezadowolenie klientów"]
    const tags = [currentReview.toPrecision(2).toString()].concat(rev)
    const opininons = opinionFetchState.map((o) => <Opinion key={o.id} widget src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} id={o.id} />)

    return (
        <>
            <Widget childComponent={<>
                <svg cursor={"pointer"} onClick={e => prevOpinions()} data-accordion-icon className="w-12 h-12 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                {opininons}
                <svg cursor={"pointer"} onClick={e => nextOpinions()} data-accordion-icon className="w-12 h-12 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </>} title={'Opinions'} tags={tags} href={'/opinions'} />
        </>
    )
}

export default WidgetOpinions