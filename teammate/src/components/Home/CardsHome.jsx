import React from "react";
import { Link } from "react-router-dom";
import "./CardsHome.css";

const CardsHome = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="card mr-2">
        <Link to="/userProfile" className="myprofile text-decoration-none text-white">
          <div className="card-body">
            <h5 className="card-title">My Profile</h5>
          </div>
        </Link>
      </div>
      <div className="card mr-2">
        <div className="card-body">
          <h5 className="card-title">My Events</h5>
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
