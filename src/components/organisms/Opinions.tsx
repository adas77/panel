import useOpinons from '../../hooks/useOpinons'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'
import NavigationCopy from '../molecules/NavigationCopy'
import Opinion from '../molecules/Opinion'

const Opinions = () => {
    const { getFiveOpinions, getPositiveOpinions, getNegativeOpinions, opinionFetchState } = useOpinons()
    return (
        <>
            <Navigation />
            {/* <NavigationCopy /> */}
            <Button variant='outline' onClick={e => getFiveOpinions()}>FIVE</Button>
            <Button variant='outline' onClick={e => getPositiveOpinions()}>POSITIVE</Button>
            <Button variant='outline' onClick={e => getNegativeOpinions()}>NEGATIVE</Button>
            <br />
            <br />
            <div className='container flex flex-wrap gap-10'>
                {opinionFetchState.map((o) => <Opinion src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} />)}
            </div>
        </>
    )
}

export default Opinions