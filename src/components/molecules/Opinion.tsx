import clsx from "clsx"
import { OpinionType } from '../../types/OpinionType'
import Image from '../atoms/Image'

import Rate from './Rate'
import { formatDate } from "../../utils/format"
import useLang from "../../hooks/useLang"
import useGlobalDispatch from "../../redux/actionCreators"
import { useSelector } from "react-redux"
import console from "console"

const Opinion = (props: OpinionType) => {
    const [isPolish] = useSelector((s: GlobalState) => {
        return [s.isPolish]
    })
    const person = `${props.name} ${props.surname}`

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            {props.widget ||
                <div className="flex items-center m-4 gap-4">
                    <a href="/opinions">
                        <Image src={props.src} alt={props.alt} />
                    </a>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{person}</span>
                </div>}
            <div className={clsx(
                "px-5 pb-5",
                props.widget && "w-72"
            )}>
                {props.widget || <a href="/opinions">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.description}</h5>
                </a>}
                <Rate rate={props.rate} />
                <span className="text font-bold text-gray-900 dark:text-white">{formatDate(props.date, isPolish)}</span>
            </div>
        </div>
    )
}

export default Opinion
