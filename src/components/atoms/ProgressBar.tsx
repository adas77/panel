import clsx from 'clsx'
import { QualityType } from '../../types/QualityType'
import { formatPercent } from '../../utils/format'

const ProgressBar = (props: QualityType) => {
    return (
        <dl>
            <dt className="text-m font-medium text-gray-500 dark:text-gray-400">{props.category} <b className='text-xl' >{props.weight}</b> </dt>
            <dd className="flex items-center mb-3">
                <div className="w-96 bg-gray-200 rounded h-2.5 dark:bg-gray-800 mr-2">
                    <div className=
                        "bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: 384 * props.percent / 100 }}></div>
                </div>
                <span className=
                    "text-3xl font-medium text-gray-500 dark:text-gray-400" >
                    <b
                    >{formatPercent(props.percent)}</b>
                </span>

            </dd>
        </dl>
    )
}

export default ProgressBar