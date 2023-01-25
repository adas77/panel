import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    title: string
    advice: string
}

const Card = (props: Props) => {
    return (
        <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
            {props.children}
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.advice}</p>
        </div>
    )
}

export default Card