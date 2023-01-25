
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useLang from '../../hooks/useLang';
import useGlobalDispatch from '../../redux/actionCreators';
import Button from '../atoms/Button';
import LangSwitcher from './LangSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import useAccount from '../../hooks/useAccount';
import Dropdown from '../atoms/Dropdown';
import Image from '../atoms/Image';
import dog from '../atoms/img/dog.jpg';
import def from '../atoms/img/default.jpg';

type Props = {
    href: string,
    name: string,
    logout?: boolean
}

const NavigationItem = (props: Props) => {
    const { cmdLogout } = useGlobalDispatch()
    return (
        <li>
            <a onClick={e => props.logout && cmdLogout()} href={props.href} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{props.name}</a>
        </li>
    )
}

const Navigation = () => {
    const { lang } = useLang()
    const [isAuth, isAcc1] = useSelector((s: GlobalState) => {
        return [s.isAuth, s.acc1]
    })
    const { cmdLogout, cmdSwitchAccount } = useGlobalDispatch()

    const items = [{ href: '/widgets', name: lang.widgets }, { href: '/orders', name: lang.orders }, { href: '/quality', name: lang.quality }, { href: '/opinions', name: lang.opinions }, { href: '/rankings', name: lang.rankings }, { href: '/charts', name: lang.charts }]
    const u1 = {
        name: "u1", handleClick: () => {
            cmdSwitchAccount()
        }
    }
    const u2 = {
        name: "u2", handleClick: () => {
            cmdSwitchAccount()
        }
    }


    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className='flex items-center gap-x-4'>
                        <LangSwitcher />
                        <ThemeSwitcher />
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {items.map((p) => {
                                return <NavigationItem key={p.href} href={p.href} name={p.name} />
                            })}
                        </ul>
                        <div className='flex items-center gap-x-6'>
                            <Button onClick={e => isAuth && cmdLogout()} variant='outline'><Link to={isAuth ? "/widgets" : "/login"}>{isAuth ? lang.logout : lang.login}</Link></Button>
                            {isAuth && <Image size='small' src={isAcc1 ? dog : def} onClick={cmdSwitchAccount} />}
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation