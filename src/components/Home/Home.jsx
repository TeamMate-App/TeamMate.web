import React from "react";
import "./Home.css";
import CardsHome from "./CardsHome/CardsHome";
import SearchHome from "./SearchBar/SearchHome";

const Home = () => {
  return (
    <div className="home">
      <main>
        <div className="over-img">
          <div className="">
            <div
              className="backgroundImg"
              aria-hidden="true"
              alt="Background Image"
            ></div>
            <div className="container-fluid text-white  over-img ">
              <div className="container ">
                <CardsHome />
              </div>
              <div>
                <div className="mt-5">
                  <SearchHome />
                </div>
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
