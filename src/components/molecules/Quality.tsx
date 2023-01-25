import clsx from 'clsx'
import useLang from '../../hooks/useLang'
import { QualityType } from '../../types/QualityType'
import { formatPercent } from '../../utils/format'
import ProgressBar from '../atoms/ProgressBar'

type Props = {
    showWorst?: boolean,
    ranks: QualityType[]
}

const Quality = (props: Props) => {
    const { lang } = useLang()
    const worst = props.ranks.sort((a, b) => a.percent - b.percent).slice(0, 3)
    const avg: number = (props.ranks.map(r => formatPercent(r.percent) * r.weight).reduce((partialSum, a) => partialSum + a, 0)) / (props.ranks.map(r => r.weight).reduce((partialSum, a) => partialSum + a, 0))

    let category
    if (avg < 4) {
        category = lang.veryBad
    }
    else if (avg < 5) {
        category = lang.bad
    }
    else if (avg < 7) {
        category = lang.notBad
    } else if (avg < 8) {
        category = lang.quiteGood
    } else if (avg < 9) {
        category = lang.veryGood
    } else {
        category = lang.excellent
    }

    return (
        <div>
            <div className="flex items-center mb-5">
                <p className="bg-blue-100 text-blue-800 text-5xl font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">{avg.toPrecision(2)}</p>
                <p className="ml-2 text-5xl font-medium text-gray-900 dark:text-white">{category}</p>
                <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">376 reviews</p>
                <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
            </div>
            {props.showWorst &&
                <div>
                    <p className='text-xl text-gray-500 dark:text-gray-400'>{lang.worstRanks}</p>
                    <br />
                </div>}
            <div className={clsx(
                "gap-x-6 grid",
                props.showWorst ? "grid-cols-1" : "grid-cols-2",
            )}>
                {props.showWorst
                    ? worst.map(r => <ProgressBar category={r.category} percent={r.percent} weight={r.weight} />)
                    :
                    props.ranks.map(r => <ProgressBar category={r.category} percent={r.percent} weight={r.weight} />)}
            </div>
        </div>
    )
}

export default Quality