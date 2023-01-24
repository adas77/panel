import useLang from '../../hooks/useLang'
import useOpinons from '../../hooks/useOpinons'
import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown'
import Opinion from '../molecules/Opinion'
import Search from '../molecules/Search'
import { OpinionFetchState } from '../../types/OpinionType'
import { useEffect, useState } from 'react'

const Opinions = () => {
    const howManyShow: number = OpinionFetchState.ALL
    const { getPositiveOpinions, getNegativeOpinions, opinionFetchState, getOpinions, getByNameOpinions } = useOpinons()
    const { lang } = useLang()
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        console.log(search)
        getByNameOpinions(search)

        return () => {

        }
    }, [search])


    const positive = {
        name: lang.positive, handleClick: () => {
            getPositiveOpinions()
        }
    }
    const negative = {
        name: lang.negative, handleClick: () => {
            getNegativeOpinions()
        }
    }
    const newest = {
        name: lang.newest, handleClick: () => {
            getOpinions(false, howManyShow)
        }
    }
    const oldest = {
        name: lang.oldest, handleClick: () => {
            getOpinions(true, howManyShow + 1)
        }
    }
    return (
        <DefaultLayout>
            <Flex gap='small'>
                <Search onChange={(e) => setSearch(e.currentTarget.value)} value={search} searchPlaceholder={lang.searchBySurname} />
                <Dropdown items={[
                    positive, negative
                ]} title={lang.contentment} />
                <Dropdown items={[
                    newest, oldest
                ]} title={lang.sortByTime} />
            </Flex>




            <br />
            <br />
            <Flex gap='small'>
                {opinionFetchState.map((o) => <Opinion key={o.id} src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} id={0} />)}
            </Flex>
        </DefaultLayout>
    )
}

export default Opinions