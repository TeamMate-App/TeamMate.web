import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { logout } from "../../stores/AccessTokenStore";
import "./Navbar.css";

const Navbar = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="/">Your Logo</a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks ">
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                {" "}
                {user ? (
                  <div>
                    <button
                      className="btn btn-lg btn btn-danger "
                      onClick={logout}
                    >
                      Log out{" "}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i />
            <i />
            <i />
          </span>
        </div>
      </nav>

      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Navbar;
