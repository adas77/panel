import { ReactNode, useEffect } from 'react'
import useOpinons from '../../hooks/useOpinons'
import Opinion from '../molecules/Opinion'
import React from 'react'

type Props = {
    childComponent: ReactNode
    href: string
    title: string
    tags: string[]
}

const Widget = (props: Props) => {
    return (
        <a href={props.href}>
            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-sky-700"> */}
            <div className="rounded overflow-hidden shadow-lg bg-sky-700">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 dark:text-white">{props.title}</div>
                    <div className='columns-1'>
                        {props.childComponent}
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {props.tags.map((t) =>
                        <span key={t} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-white">#{t}</span>
                    )}
                </div>
            </div>
        </a>
    )
}

export default Widget