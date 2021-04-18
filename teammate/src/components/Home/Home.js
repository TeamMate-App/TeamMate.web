import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'




const Home = () => {


    return (
        <div className="home">
            <p>HOME</p>
            <Link to="/userProfile" className="">
                <span className="">User Profile </span>
            </Link>
            <Link to="/login" className="">
                <span className="">Login </span>
            </Link>
        </div>
    )


}

export default Home