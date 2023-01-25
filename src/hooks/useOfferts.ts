import { useEffect, useState } from 'react'
import { genOfferts } from '../data/offerts'
import useLang from './useLang'

const useOfferts = (all?: boolean) => {
    const { lang } = useLang()
    const ALL = 35
    const howMany: number = all ? ALL : 5
    const offerts = genOfferts(howMany, lang.computer, lang.phone, lang.headphones, lang.tv, lang.keyboard)
    const [freq, setFreq] = useState(true)
    const [o, setO] = useState(offerts)


    useEffect(() => {
        freq ? showFreq() : showLessFreq()

        return () => {
        }
    }, [freq])



    const showFreq = (show?: number) => {
        const offertsFreq = offerts.sort((a, b) => { return b.turnover - a.turnover })
        const f = offertsFreq.slice(0, show || howMany)
        setO(f)
    }

    const showLessFreq = (show?: number) => {
        const offertsLessFreq = offerts.sort((a, b) => { return b.views - a.views })
        const l = offertsLessFreq.slice(0, show || howMany)
        setO(l)
    }


    // const offertsFreq = offerts.sort((a, b) => { return b.turnover - a.turnover })
    // const f = offertsFreq.slice(0, SHOW)

    // const offertsLessFreq = offerts.sort((a, b) => { return b.views - a.views })
    // const l = offertsLessFreq.slice(0, SHOW)


    return { freq, showFreq, showLessFreq, o, setFreq }
}

export default useOfferts
