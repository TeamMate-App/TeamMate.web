import React from "react";
import { Link } from "react-router-dom";
import "./CardsHome.css";

const CardsHome = () => {
  return (
    <>
      <div className="d-flex card-deck row justify-content-center">
        <div className="flip-card col-4 " tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front text-decoration:none">
              <Link to="/userProfile">
              
                <div className="card-body">
                
                  <img className="imgCard"
                    src="https://kibotics.org/static/assets/img/profiles/avatar.png"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "powderblue",
                      overflow: "hidden"

                    }}
                    alt="Avatar"
                  ></img>
                </div>
              </Link>
            </div>
            <div className="flip-card-back">
              <Link to="/userProfile">
                <div className="card-body">
                  
                  <img className="imgCard"
                    src="https://kibotics.org/static/assets/img/profiles/avatar.png"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "powderblue",
                      overflow: "hidden"

                    }}
                    alt="Avatar"
                    
                  ></img><h5 className="card-title myprofile-card">My profile</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-card col-4" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Link to="/ListGames">
                <div className="card-body">
                  <img className="imgCard"
                    src="https://res.cloudinary.com/teammatereact258/image/upload/v1619868731/Teammate/jmnscfjbw1oyipesynox.jpg"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "powderblue",
                      overflow: "hidden"

                    }}
                    alt="Court"
                  ></img>

                </div>
              </Link>
            </div>
            <div className="flip-card-back">
              <Link to="/ListGames">
                <div className="card-body">
                <img className="imgCard"
                    src="https://res.cloudinary.com/teammatereact258/image/upload/v1619868731/Teammate/jmnscfjbw1oyipesynox.jpg"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "powderblue",
                      overflow: "hidden"

                    }}
                    alt="Court"
                  ></img>
                  <h5 className="card-title myprofile-card">Events</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-card col-4" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Link to="/createMatch">
                <div className="card-body">
                  <img className="imgCard"
                    src="https://st2.depositphotos.com/3849181/7778/v/600/depositphotos_77780378-stock-illustration-paddle-game.jpg"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "powderblue",
                      overflow: "hidden"

                    }}
                    alt="Avatar"
                  ></img>
                </div>
              </Link>
            </div>
            <div className="flip-card-back">
              <Link to="/createMatch">
                <div className="card-body">
                <img className="imgCard"
                    src="https://st2.depositphotos.com/3849181/7778/v/600/depositphotos_77780378-stock-illustration-paddle-game.jpg"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "powderblue",
                      overflow: "hidden"

                    }}
                    alt="Avatar"
                  ></img>
                  <h5 className="card-title myprofile-card">Create a Game</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsHome;
