import { Link } from 'react-router-dom'

import React, { ButtonHTMLAttributes, useState } from 'react'
import { type } from '@testing-library/user-event/dist/type'

type Props = {
    href: string,
    name: string,
}

type Lang = {
    pl: string,
    eng: string,
    href: string,
}

// type Langs = {
//     map(): React.ReactNode
//     items: Lang[]
// }

const NavigationItem = (props: Props) => {
    return (
        <li>
            <a href={props.href} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{props.name}</a>
        </li>
    )
}


const Navigation = () => {
    // return (
    //     <div className="App">
    //         <nav>
    //             <Link to="/">PrivateRoute</Link>
    //             <br />
    //             <Link to="/login">Login</Link>
    //         </nav>
    //     </div>
    // )
    const order: Lang = {
        pl: 'Zamówienia',
        eng: 'Orders',
        href: '/orders'
    }
    const quality: Lang = {
        pl: 'Jakość',
        eng: 'Quality',
        href: '/quality'
    }
    const opinions: Lang = {
        pl: 'Opinie',
        eng: 'Opinions',
        href: '/opinions'
    }
    const rankings: Lang = {
        pl: 'Rankingi',
        eng: 'Rankings',
        href: '/rankings'
    }
    const charts: Lang = {
        pl: 'Wykresy',
        eng: 'Charts',
        href: '/charts'
    }
    const advice: Lang = {
        pl: 'Porady',
        eng: 'Advice',
        href: '/advice'
    }
    const items = [order, quality, opinions, rankings, charts, advice]

    const [polish, setPolish] = useState(true)

    const handleChangeLang = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setPolish(!polish)
    }

    return (

        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                {/* <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"></img>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a> */}
                {/* <div className="flex md:order-2">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div> */}
                <button onClick={e => handleChangeLang(e)}>{polish ? 'change to english' : 'zmień na polski'}</button>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {items.map((p) => {
                            return <NavigationItem href={p.href} name={polish ? p.pl : p.eng} />
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navigation