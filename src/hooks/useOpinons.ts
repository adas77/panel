import { useEffect, useState } from 'react'
import useAccount from './useAccount'
import { OpinionFetchState } from '../types/OpinionType'
import { useSelector } from 'react-redux'
import { FetchState } from '../types/OpinionType'
// import opinions from '../data/opinions'

// export enum OpinionFetchState {
//   POSITIVE = 4,
//   NEGATIVE = 3,
//   ALL = 5,
//   WIDGET = 3,
// }
const useOpinons = () => {

  const { acc } = useAccount()
  const [acc1] = useSelector((s: GlobalState) => {
    return [s.acc1]
  })
  const [opinionState, setOpinionState] = useState<FetchState>("ALL")
  const [opinionFetchState, setOpinionFetchState] = useState(acc.opinions)
  const [opinionFetchIndex, setOpinionFetchIndex] = useState(OpinionFetchState.WIDGET)
  const [currentReview, setCurrentReview] = useState<number>(0)
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    // setOpinionFetchState(acc.opinions)



    switch (opinionState) {
      case "ALL":
        setOpinionFetchState(acc.opinions)

        break;

      case "POSITIVE":
        setOpinionFetchState(acc.opinions.filter((o) => o.rate >= OpinionFetchState.POSITIVE))

        break;

      case "NEGATIVE":
        setOpinionFetchState(acc.opinions.filter((o) => o.rate < OpinionFetchState.NEGATIVE))
        break;

      case "NEWEST":
        setOpinionFetchState(acc.opinions.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, OpinionFetchState.ALL))
        break;

      case "OLDEST":
        setOpinionFetchState(acc.opinions.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, OpinionFetchState.ALL))
        break;

      case "SEARCH":
        setOpinionFetchState(acc.opinions.filter((o) => search.toLowerCase().includes(o.surname.toLowerCase()) || o.surname.toLowerCase().includes(search.toLowerCase())))
        break;

      default:
        break;
    }
    const mean = (opinionFetchState.map((o) => o.rate).reduce((a, b) => a + b, 0)) / opinionFetchState.length
    setCurrentReview(mean)
    return () => {
    }
  }, [search, opinionFetchState, opinionState, acc1])


  // const getPositiveOpinions = () => {
  //   const update = acc.opinions.filter((o) => o.rate >= OpinionFetchState.POSITIVE)
  //   setOpinionFetchState(update)

  // }
  // const getNegativeOpinions = () => {
  //   const update = acc.opinions.filter((o) => o.rate <= OpinionFetchState.NEGATIVE)
  //   setOpinionFetchState(update)

  // }

  // const getByNameOpinions = (phrase: string) => {
  //   const update = acc.opinions.filter((o) => phrase.toLowerCase().includes(o.surname.toLowerCase()) || o.surname.toLowerCase().includes(phrase.toLowerCase()))
  //   setOpinionFetchState(update)

  // }

  // const switchNewest = () => {
  //   setNewest(!newest)
  //   getOpinions(newest)
  // }

  const getOpinions = (oldest?: boolean, howMany?: number) => {
    const update = acc.opinions
      .sort((a, b) => { return oldest ? a.date.getTime() - b.date.getTime() : b.date.getTime() - a.date.getTime() })
      .slice(0, howMany || OpinionFetchState.ALL)
    setOpinionFetchState(update)
  }

  const nextOpinions = () => {
    const update = acc.opinions.slice(opinionFetchIndex, opinionFetchIndex + OpinionFetchState.WIDGET)
    if (update.length > 0) {
      setOpinionFetchIndex(opinionFetchIndex + OpinionFetchState.WIDGET)
      setOpinionFetchState(update)
    }
  }

  const prevOpinions = () => {
    const update = acc.opinions.slice(opinionFetchIndex - 2 * OpinionFetchState.WIDGET, opinionFetchIndex - OpinionFetchState.WIDGET)
    if (update.length > 0) {
      setOpinionFetchIndex(opinionFetchIndex - OpinionFetchState.WIDGET)
      setOpinionFetchState(update)
    }
  }

  return { getOpinions, currentReview, nextOpinions, prevOpinions, opinionFetchState, setOpinionState, opinionState, setSearch, search }
}
export default useOpinons