import { useEffect, useState } from 'react'
import useAccount from './useAccount'
import { OpinionFetchState } from '../types/OpinionType'
import { useSelector } from 'react-redux'
import { FetchState } from '../types/OpinionType'

const useOpinons = () => {

  const { acc } = useAccount()
  const [acc1] = useSelector((s: GlobalState) => {
    return [s.acc1]
  })
  const [opinionState, setOpinionState] = useState<FetchState>("ALL")
  const [opinionFetchState, setOpinionFetchState] = useState(acc.opinions)
  const [search, setSearch] = useState<string>("")
  const [next, setNext] = useState(0)

  useEffect(() => {

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
        setOpinionFetchState(acc.opinions.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, OpinionFetchState.ALL + 3))
        break;

      case "OLDEST":
        setOpinionFetchState(acc.opinions.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, OpinionFetchState.ALL + 3))
        break;

      case "SEARCH":
        setOpinionFetchState(acc.opinions.filter((o) => search.toLowerCase().includes(o.surname.toLowerCase()) || o.surname.toLowerCase().includes(search.toLowerCase())))
        break;

      case "NEXT":
        setOpinionFetchState(acc.opinions.slice(next, next + 5))
        break;


      default:
        break;
    }


    return () => {
    }
  }, [search, opinionState, acc1, next])

  const switchNext = () => {
    next + 5 <= acc.opinions.length ? setNext(next + 5) : setNext(0)
  }


  return { opinionFetchState, setOpinionState, opinionState, setSearch, search, switchNext, next }
}
export default useOpinons