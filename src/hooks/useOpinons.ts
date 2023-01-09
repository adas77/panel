import { useState } from 'react'
import opinions from '../data/opinions'
enum OpinionFetchState {
  POSITIVE = 4,
  NEGATIVE = 3,
  ALL = 5,
}
const useOpinons = () => {

  const [opinionFetchState, setOpinionFetchState] = useState(opinions)

  const getPositiveOpinions = () => {
    const update = opinions.filter((o) => o.rate >= OpinionFetchState.POSITIVE)
    setOpinionFetchState(update)

  }
  const getNegativeOpinions = () => {
    const update = opinions.filter((o) => o.rate <= OpinionFetchState.NEGATIVE)
    setOpinionFetchState(update)

  }
  const getOpinions = (howMany?: number) => {
    const update = opinions.slice(0, howMany || OpinionFetchState.ALL)
    setOpinionFetchState(update)
  }

  return { getPositiveOpinions, getNegativeOpinions, getOpinions, opinionFetchState }
}

export default useOpinons