import { useEffect, useState } from 'react'
import opinions from '../data/opinions'

export enum OpinionFetchState {
  POSITIVE = 4,
  NEGATIVE = 3,
  ALL = 5,
  WIDGET = 3,
}
const useOpinons = () => {

  const [opinionFetchState, setOpinionFetchState] = useState(opinions)
  const [opinionFetchIndex, setOpinionFetchIndex] = useState(OpinionFetchState.WIDGET)
  const [currentReview, setCurrentReview] = useState<number>(0)
  const [newest, setNewest] = useState(true)

  useEffect(() => {
    const mean = (opinionFetchState.map((o) => o.rate).reduce((a, b) => a + b, 0)) / opinionFetchState.length
    setCurrentReview(mean)
    return () => {
    }
  }, [opinionFetchState])


  const getPositiveOpinions = () => {
    const update = opinions.filter((o) => o.rate >= OpinionFetchState.POSITIVE)
    setOpinionFetchState(update)

  }
  const getNegativeOpinions = () => {
    const update = opinions.filter((o) => o.rate <= OpinionFetchState.NEGATIVE)
    setOpinionFetchState(update)

  }

  const switchNewest = () => {
    setNewest(!newest)
    getOpinions(newest)
  }

  const getOpinions = (oldest?: boolean, howMany?: number) => {
    const update = opinions
      .sort((a, b) => { return oldest ? a.date.getTime() - b.date.getTime() : b.date.getTime() - a.date.getTime() })
      .slice(0, howMany || OpinionFetchState.ALL)
    setOpinionFetchState(update)
  }

  const nextOpinions = () => {
    const update = opinions.slice(opinionFetchIndex, opinionFetchIndex + OpinionFetchState.WIDGET)
    if (update.length > 0) {
      setOpinionFetchIndex(opinionFetchIndex + OpinionFetchState.WIDGET)
      setOpinionFetchState(update)
    }
  }

  const prevOpinions = () => {
    const update = opinions.slice(opinionFetchIndex - 2 * OpinionFetchState.WIDGET, opinionFetchIndex - OpinionFetchState.WIDGET)
    if (update.length > 0) {
      setOpinionFetchIndex(opinionFetchIndex - OpinionFetchState.WIDGET)
      setOpinionFetchState(update)
    }
  }

  return { getPositiveOpinions, getNegativeOpinions, getOpinions, currentReview, nextOpinions, prevOpinions, opinionFetchState, switchNewest, newest }
}
export default useOpinons