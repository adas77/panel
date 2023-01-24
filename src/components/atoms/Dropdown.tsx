import { useState } from 'react'
import Button from './Button'

type Item = {
    name: string,
    handleClick: () => any
}

type Props = {
    title: string,
    items: Item[]
}


const Dropdown = (props: Props) => {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState<string | undefined>(undefined)

    return (
        <div className='grid gap-y-1 grid-cols-1 w-fit'>
            <Button onClick={() => setShow(!show)} variant='inline' size='fullWidth'>
                {title || props.title}
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </Button>
            <div hidden={!show} className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {props.items.map(i => <li key={i.name}>
                        <a onClick={() => {
                            i.handleClick()
                            setShow(false)
                            setTitle(i.name)
                        }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{i.name}</a>
                    </li>)}
                </ul>
            </div>
        </div>

    )
}

export default Dropdown