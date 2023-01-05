import React, { createContext, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navigation from './Navigation'

const Login = () => {
    const CORRECT_USER: string = "admin"
    const CORRECT_PASS: string = "admin123"

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const { isAuth, setIsAuth } = useGlobalAuthContext()


    const handleForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (username === CORRECT_USER && pass === CORRECT_PASS) {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
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
        <div className="App">
            {isAuth && <Navigate to={'/'} />}
            <Navigation />
            <form onSubmit={e => handleForm(e)}>
                <div>
                    Username
                    <input type="text" onChange={e => handleUsername(e)} placeholder="Enter Username" />
                </div>
                <div>
                    Password
                    <input type="password" onChange={e => handlePassword(e)} placeholder="Enter Password" />
                </div>
                <button onSubmit={e => e.preventDefault()}>Login</button>
            </form>
            {isAuth ? <p>Zalogowany</p> : <p>Niezaloogowany</p>}
        </div>

    )
}

export type GlobalAuth = {
    isAuth: boolean
    setIsAuth: (is: boolean) => void
}
export const GlobalAuthContext = createContext<GlobalAuth>({
    isAuth: false,
    setIsAuth: () => { }
})
export const useGlobalAuthContext = () => useContext(GlobalAuthContext)

export default Login