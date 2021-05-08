import React from "react";
import "./Home.css";
import CardsHome from "./CardsHome/CardsHome";
import Footer from "./Footer/Footer";
import SearchHome from "./SearchBar/SearchHome";
import SectionHome from "./SectionHome/SectionHome";
import AboutUsHome from "./SectionHome/AboutUsHome";

const Home = () => {
  return (
    <>
      <div className="home container justify-content-center">
        <main>
          <div className="over-img">
            <div className="">
              <div className="backgroundImg" aria-hidden="true" alt=" "></div>
              <div className="container">
                <div className="mt-4">
                  <CardsHome />
                </div>
                <div>
                  <div className="mt-5">
                    <SearchHome />
                  </div>
                </div>
                <div className="container d-flex justify-content-center">
                  <div className="login-signup ">
                    <h1 className="title text-white">TeamMate</h1>

                    <strong className="text-white">
                      Encuentra o crea el deporte que quieres practicar
                    </strong>

                    <div className="buttons justify-content-center">
                      <a
                        className=" btn btn-lg btn btn-outline-light"
                        href="/login"
                      >
                        Login
                      </a>
                      <a
                        className="  btn btn-lg btn btn-outline-light"
                        href="/register"
                      >
                        SignUp
                      </a>
                    </div>
                  </div>
                </div>
                <SectionHome />
                <AboutUsHome />
              </div>
            </div>
          </div>
        </main>
      <Footer />
      </div>

    </>
  );
};

export default Home;
