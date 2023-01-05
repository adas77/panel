import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="App">
            <nav>
                <Link to="/">PrivateRoute</Link>
                <br />
                <Link to="/login">Login</Link>
            </nav>
        </div>

    )
}

export default Navigation