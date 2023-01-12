import useLang from '../../hooks/useLang'
import useOpinons from '../../hooks/useOpinons'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'
import Opinion from '../molecules/Opinion'

const Opinions = () => {
    const { getPositiveOpinions, getNegativeOpinions, opinionFetchState, switchNewest, newest } = useOpinons()
    const { lang } = useLang()
    return (
        <>
            <Navigation />
            <Button variant='outline' onClick={() => switchNewest()}>{newest ? lang.newest : lang.oldest}</Button>
            <Button variant='outline' onClick={() => getPositiveOpinions()}>{lang.positive}</Button>
            <Button variant='outline' onClick={() => getNegativeOpinions()}>{lang.negative}</Button>
            <br />
            <br />
            <div className='container flex flex-wrap gap-10'>
                {opinionFetchState.map((o) => <Opinion key={o.id} src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} id={0} />)}
            </div>
        </>
    )
}

export default Opinions