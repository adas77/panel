import useLang from '../../hooks/useLang'
import useOpinons from '../../hooks/useOpinons'
import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'
import Button from '../atoms/Button'
import Opinion from '../molecules/Opinion'

const Opinions = () => {
    const { getPositiveOpinions, getNegativeOpinions, opinionFetchState, switchNewest, newest } = useOpinons()
    const { lang } = useLang()
    return (
        <DefaultLayout>
            <Button variant='outline' onClick={() => switchNewest()}>{newest ? lang.newest : lang.oldest}</Button>
            <Button variant='outline' onClick={() => getPositiveOpinions()}>{lang.positive}</Button>
            <Button variant='outline' onClick={() => getNegativeOpinions()}>{lang.negative}</Button>
            <br />
            <br />
            <Flex gap='small'>
                {opinionFetchState.map((o) => <Opinion key={o.id} src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} id={0} />)}
            </Flex>
        </DefaultLayout>
    )
}

export default Opinions