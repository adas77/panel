import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useGlobalDispatch from '../../redux/actionCreators'
import Navigation from '../molecules/Navigation'
import { Navigate, useLocation } from 'react-router-dom'


const Login = () => {
    const location = useLocation();
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
            {isAuth && <Navigate to="/widgets" replace state={{ from: location }} />}
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
        </div>

    )
}

export default Login