import React from "react";
import "./UserProfile.css";
import Logo from "../../assets/Movistar-Logo.png";
import DeleteUser from "../DeleteUser/DeleteUser";
import ListUsers from "../User/ListUsers";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="page-heading">
        <div className="media clearfix">
          <div className="media-left pr30">









          </div>

          <div className="media-body va-m">
            <a href="/">
              <img
                className="media-object mw150"
                src={Logo}
                alt="..."
                width="100"
                height="100"
              />
            </a>
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
              <p className="p"><a href="/ListGames">Search sporting events</a></p>
            </div>
            <div className="col-sm-2 card">
              <p className="p"><a href="/createMatch">Organize Matches and Events</a></p>
            </div>
            <div className="col-sm-2 card">
              <p className="p">Create a club</p>
            </div>
            <div className="col-sm-2 card">
              <p className="p">Search Players</p>
            </div>
          </div>
        </div>
      </div>
      <DeleteUser />
    </div>
  );
};

export default UserProfile;
