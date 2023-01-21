import { RankingType } from '../../types/RankingType'
import { formatPercent } from '../../utils/format'

const ProgressBar = (props: RankingType) => {
    return (
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{props.category}</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: props.percent }}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{formatPercent(props.percent)}</span>
            </dd>
        </dl>
    )
}

export default ProgressBar