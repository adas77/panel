import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalAuthContext } from './Login'
import Navigation from './Navigation'

const PrivateRoute = () => {
    const { isAuth, setIsAuth } = useGlobalAuthContext()

    const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setIsAuth(false)
    }

    return (
        <div className='App'>
            {
                isAuth || <Navigate to={'/login'} />
            }
            <Navigation />
            <div>PrivateRoute</div>
            <button onClick={e => handleLogout(e)}>Logout</button>

        </div>
    )
}

export default PrivateRoute