import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Image from "../../assets/paddle-blade-2523537_1920.jpg";

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
            <img
              className="bd-placeholder-img"
              src={Image}
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="ksjd"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>TeamMate</h1>
                <p>
                  <strong>
                    Encuentra o crea el deporte que quieres practicar
                  </strong>
                </p>
                <p>
                  <a className="btn btn-lg btn btn-light mr-1" href="/login">
                    Login
                  </a>
                  <a className="btn btn-lg btn btn-light ml-1" href="/register">
                    SignUp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
