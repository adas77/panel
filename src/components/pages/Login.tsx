import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import user1 from '../../data/auth'
import useLang from '../../hooks/useLang'
import useGlobalDispatch from '../../redux/actionCreators'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'


const Login = () => {
    const location = useLocation();
    const { lang } = useLang();
    const [username, setUsername] = useState(user1.username)
    const [pass, setPass] = useState(user1.pass)

    const { cmdLogin } = useGlobalDispatch()
    const [isAuth] = useSelector((s: GlobalState) => {
        return [s.isAuth]
    })

    const handleForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        cmdLogin(username, pass)

    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPass(event.target.value)
    }

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setUsername(event.target.value)
    }

    return (
        <>
            {isAuth && <Navigate to="/widgets" replace state={{ from: location }} />}
            <Navigation />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {lang.signIn}
                            </h1>
                            <form onSubmit={e => handleForm(e)} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang.yourUsername}</label>
                                    <input onChange={e => handleUsername(e)} type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={lang.passUsername} value={username}></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang.yourPass}</label>
                                    <input onChange={e => handlePassword(e)} type="password" name="password" id="password" placeholder={lang.passPass} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pass}></input>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" ></input>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">{lang.rememberMe}</label>
                                        </div>
                                    </div>
                                    <a href="/forgot" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">{lang.forgotPass}</a>
                                </div>
                                <Button variant='outline' size='fullWidth'>{lang.login}</Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    {lang.donHaveAccountYet}{' '}
                                    <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">{lang.signUp}</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Login