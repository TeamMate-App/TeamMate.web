import React from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Movistar-Logo.png'


const Login = () => {


    return (
        <div className="login">
            <Link to="/" className="">
                <span className="">Home </span>
            </Link>
                <main className="form-signin">
                    <form>
                        <img className="mb-4" src={Logo} alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label className=""><input type="checkbox" value="remember-me" /> Remember me </label>
                        </div>
                        <button className="w-80 btn btn-lg btn btn-outline-success" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2021</p>
                    </form>
                </main>
        </div>
    )
}

export default Login