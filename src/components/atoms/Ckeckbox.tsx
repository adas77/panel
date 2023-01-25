import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Ckeckbox = ({ ...props }: Props) => {
    return (

        <div className="flex items-center mr-4">
            <input {...props} id="a-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="a-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{props.label}</label>
        </div>
    )
}

export default Ckeckbox