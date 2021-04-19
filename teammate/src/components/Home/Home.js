import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
import Image from '../../assets/paddle-blade-2523537_1920.jpg'




const Home = () => {


    return (
        <div className="home">
            <p>HOME</p>
            <Link to="/userProfile" className="">
                <span className="">User Profile </span>
            </Link>
            <main>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="bd-placeholder-img" src={Image} width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>TeamMate</h1>
                                <p><strong>Encuentra o crea el deporte que quieres practicar</strong></p>
                                <p><a className="btn btn-lg btn btn-outline-light" href="/login">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                    </div>
                </div>

            </main>
        </div>
    )


}

export default Home