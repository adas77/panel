import useOpinons from '../../hooks/useOpinons'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'
import Opinion from '../molecules/Opinion'

const Opinions = () => {
    const { getFiveOpinions, getPositiveOpinions, getNegativeOpinions, opinionFetchState } = useOpinons()
    return (
        <>
            <Navigation />
            <Button variant='outline' onClick={e => getFiveOpinions()}>FIVE</Button>
            <Button variant='outline' onClick={e => getPositiveOpinions()}>POSITIVE</Button>
            <Button variant='outline' onClick={e => getNegativeOpinions()}>NEGATIVE</Button>
            <br />
            <br />
            <div className='container flex flex-wrap gap-10'>
                {opinionFetchState.map((o) => <Opinion key={o.date} src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} />)}
            </div>
        </>
    )
}

export default Opinions