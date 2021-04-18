import React from 'react' 
import './UserProfile.css'
import { Link } from 'react-router-dom'


const UserProfile = () => {

    return (
        <div className="UserProfile">
                <p>User Profile</p>

                <Link to="/" className="">
                <span className="">Home </span>
                </Link>
        </div>
    )


}

export default UserProfile