import React from "react";
import "./Home.css";
import Image from "../../assets/hermes-rivera-newhL3aprGk-unsplash.jpg";
import CardsHome from "./CardsHome";
import SearchHome from "../SearchHome/SearchHome"

const Home = () => {
  return (
    <div className="home">
      <main>
        <div className="">
          <div className="">
            <img
              className="backgroundImg"
              src={Image}
              aria-hidden="true"
              alt="Background Image"
            />
            <div className="container-fluid text-white  over-img ">
              <div className="container ">
                <CardsHome />
              </div>
              <div>
                <h1 className="title">TeamMate</h1>
                <p>
                  <strong>
                    Encuentra o crea el deporte que quieres practicar
                  </strong>
                </p>
                <p>
                  <a className="btn btn-lg btn btn-light mr-1 " href="/login">
                    Login
                  </a>
                  <a className="btn btn-lg btn btn-light ml-1" href="/register">
                    SignUp
                  </a>
                </p>
              </div>
              <div>
                <h1 className="title">TeamMate</h1>
                <p>
                  <strong>
                    Encuentra o crea el deporte que quieres practicar
                  </strong>
                </p>
                <SearchHome />
                <p>
                  <a className="btn btn-lg btn btn-light mr-1 " href="/login">
                    Login
                  </a>
                  <a className="btn btn-lg btn btn-light ml-1" href="/register">
                    SignUp
                  </a>
                </p>
              </div>
              <div>
                <h1 className="title">TeamMate</h1>
                <p>
                  <strong>
                    Encuentra o crea el deporte que quieres practicar
                  </strong>
                </p>
                <p>
                  <a className="btn btn-lg btn btn-light mr-1 " href="/login">
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
