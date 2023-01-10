import React, { createContext, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navigation from '../components/molecules/Navigation'
import useGlobalDispatch from '../redux/actionCreators'
import { useSelector } from 'react-redux'

const Login = () => {
    const CORRECT_USER: string = "admin"
    const CORRECT_PASS: string = "admin123"

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

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
        <div className="App">
            {/* {isAuth && <Navigate to={'/'} />} */}
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
    isPoland: boolean
    setIsAuth: (is: boolean) => void
    setIsPoland: (is: boolean) => void
}
export const GlobalAuthContext = createContext<GlobalAuth>({
    isAuth: false,
    isPoland: true,
    setIsAuth: () => { },
    setIsPoland: () => { },
})
export const useGlobalAuthContext = () => useContext(GlobalAuthContext)

export default Login