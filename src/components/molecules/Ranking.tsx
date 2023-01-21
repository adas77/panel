import { RankingType } from '../../types/RankingType'
import ProgressBar from '../atoms/ProgressBar'

type Props = {
    ranks: RankingType[]
}

const Ranking = (props: Props) => {
    return (
        <div>
            <div className="flex items-center mb-5">
                <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">8.7</p>
                <p className="ml-2 font-medium text-gray-900 dark:text-white">Excellent</p>
                <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">376 reviews</p>
                <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
            </div>
            <div className="gap-x-6 grid grid-cols-2">
                {props.ranks.map(r => <ProgressBar category={r.category} percent={r.percent} weight={4} />)}
            </div>
        </div>
    )
}

export default Ranking