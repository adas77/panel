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
    const { opinionFetchState, opinionState, setOpinionState, setSearch, search } = useOpinons()
    const { lang } = useLang()

    const positive = {
        name: lang.positive, handleClick: () => {
            setOpinionState("POSITIVE")
        }
    }
    const negative = {
        name: lang.negative, handleClick: () => {
            setOpinionState("NEGATIVE")

        }
    }
    const newest = {
        name: lang.newest, handleClick: () => {
            setOpinionState("NEWEST")

        }
    }
    const oldest = {
        name: lang.oldest, handleClick: () => {
            setOpinionState("OLDEST")

        }
    }
    return (
        <DefaultLayout>
            <br />
            <Flex gap='small'>
                <Search onChange={(e) => {
                    e.currentTarget.value.length > 0 ? setOpinionState("SEARCH") : setOpinionState("ALL")
                    setSearch(e.currentTarget.value)
                }} value={search} searchPlaceholder={lang.searchBySurname} />
                <Dropdown variant={(opinionState === "POSITIVE" || opinionState === "NEGATIVE") ? 'dropdown' : 'dropdownGhost'} items={[
                    positive, negative
                ]} title={lang.contentment} />
                <Dropdown variant={(opinionState === "NEWEST" || opinionState === "OLDEST") ? 'dropdown' : 'dropdownGhost'} items={[
                    newest, oldest
                ]} title={lang.sortByTime} />
                <Button variant={opinionState === "ALL" ? 'outline' : 'ghost'} onClick={() => setOpinionState("ALL")}>{lang.all}</Button>
            </Flex>
            <Flex gap='small'>
                {opinionFetchState.map((o) => <Opinion key={o.id} src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} id={0} />)}
            </Flex>
        </DefaultLayout>
    )
}

export default Opinions