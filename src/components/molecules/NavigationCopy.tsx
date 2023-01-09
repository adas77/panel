
// import React, { useState } from 'react'

// type Props = {
//     href: string,
//     name: string,
//     dropdown?: string[],
// }

// type Dropdown = {
//     items: string[]
// }

// type Lang = {
//     pl: string,
//     eng: string,
//     href: string,
//     dropdown?: string[],

// }

// const NavigationItem = (props: Props) => {
//     return (
//         <li>
//             {props.dropdown ?
//                 <>
//                     <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
//                     <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                         <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
//                             <li>
//                                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//                             </li>
//                         </ul>
//                         <div className="py-1">
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
//                         </div>
//                     </div>
//                 </>
//                 :
//                 <a href={props.href} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{props.name}</a>
//             }
//         </li>

//     )
// }


// const Navigation = () => {

//     const order: Lang = {
//         pl: 'Zamówienia',
//         eng: 'Orders',
//         href: '/orders',
//         dropdown: ['Nieopłacone', 'Opłacone'],
//     }
//     const quality: Lang = {
//         pl: 'Jakość',
//         eng: 'Quality',
//         href: '/quality'
//     }
//     const opinions: Lang = {
//         pl: 'Opinie',
//         eng: 'Opinions',
//         href: '/opinions'
//     }
//     const rankings: Lang = {
//         pl: 'Rankingi',
//         eng: 'Rankings',
//         href: '/rankings'
//     }
//     const charts: Lang = {
//         pl: 'Wykresy',
//         eng: 'Charts',
//         href: '/charts'
//     }
//     const advice: Lang = {
//         pl: 'Porady',
//         eng: 'Advice',
//         href: '/advice'
//     }
//     const login: Lang = {
//         pl: 'Zaloguj',
//         eng: 'Login',
//         href: '/login'
//     }
//     const items = [order, quality, opinions, rankings, charts, advice, login]

//     const [polish, setPolish] = useState(true)

//     const handleChangeLang = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault()
//         setPolish(!polish)
//     }

//     return (
//         <>
//             <button onClick={e => handleChangeLang(e)}>{polish ? 'change to english' : 'zmień na polski'}</button>


//             <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//                 <div className="container flex flex-wrap items-center justify-between mx-auto">
//                     <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
//                         <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                             {items.map((p) => {
//                                 return <NavigationItem key={p.href} href={p.href} name={polish ? p.pl : p.eng} dropdown={p.dropdown} />
//                             })}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>



//             <br />
//             <br />
//             <br />
//         </>

//     )
// }

// export default Navigation
import React from 'react'

type Props = {}

const NavigationCopy = (props: Props) => {
    return (
        <div>NavigationCopy</div>
    )
}

export default NavigationCopy