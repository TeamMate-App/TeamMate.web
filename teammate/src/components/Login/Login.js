import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {


    return (
        <div className="login">
            <p>Login</p>
            <Link to="/" className="">
                <span className="">Home </span>
            </Link>

        </div>
    )
}

export default Login