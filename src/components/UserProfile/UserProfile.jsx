import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Movistar-Logo.png";
import DeleteUser from "../DeleteUser/DeleteUser";
import ListUsers from "../User/ListUsers";

const UserProfile = () => {
  return (
    
    <div className="UserProfile">
        <div className="shownavbar"></div>

      <Link to="/" className="">
        <span className="">Home </span>
      </Link>
      <div className="page-heading">
        <div className="media clearfix">
          <div className="media-left pr30">
            <a href="/">
              <img
                className="media-object mw150"
                src={Logo}
                alt="..."
                width="100"
                height="100"
              />
            </a>
          </div>
          
          <div className="media-body va-m">
            <h2 className="media-heading">
              User
              <small> - Profile</small>
            </h2>
            <p className="lead">
              What can I do now?
            </p>
            
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
            <ListUsers />
            </div>
            <div className="col-sm-2 card">
              <p>Search sporting events</p>
            </div>
            <div className="col-sm-2 card">
              <p>Organize Matches and Events</p>
            </div>
            <div className="col-sm-2 card">
              <p>Create a club</p>
            </div>
            <div className="col-sm-2 card">
              <p>Look for players</p>
            </div>
          </div>
        </div>
      </div>
        <DeleteUser />
    </div>
  );
};

export default UserProfile;
