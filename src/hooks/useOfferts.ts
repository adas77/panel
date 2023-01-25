import { useEffect, useState } from 'react'
import { genOfferts } from '../data/offerts'
import useLang from './useLang'
import useAccount from './useAccount'
import { useSelector } from 'react-redux'

const useOfferts = (all?: boolean) => {
    const [acc1] = useSelector((s: GlobalState) => {
        return [s.acc1]
    })
    const { acc } = useAccount()
    const ALL = 35
    const howMany: number = all ? ALL : 5

    const [freq, setFreq] = useState(true)
    const [o, setO] = useState(acc.offerts)


    useEffect(() => {
        freq ?
            setO(acc.offerts.sort((a, b) => { return b.turnover - a.turnover }).slice(0, howMany))
            :
            setO(acc.offerts.sort((a, b) => { return b.views - a.views }).slice(0, howMany))

        return () => {
        }
    }, [freq, acc1])

    return { freq, o, setFreq, setO }
}

export default useOfferts
