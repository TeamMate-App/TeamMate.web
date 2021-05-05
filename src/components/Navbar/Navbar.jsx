import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./Navbar.css";
import $ from "jquery";
import { logout } from "../../stores/AccessTokenStore";

const Navbar = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    $(".navTrigger").click(function () {
      $(this).toggleClass("active");

      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
      } else {
        $(".nav").removeClass("affix");
      }
    });
  }, []);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="/">Your Logo</a>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li>
              <a href="/">About</a>
            </li>

            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/userprofile">Profile</a>
            </li>
            <li>
              {user ? (
                <>
                  <button
                    className="btn btn-lg btn btn-danger "
                    onClick={logout}
                  >
                    Log out{" "}
                  </button>
                </>
              ) : (
                <div></div>
              )}
            </li>
          </ul>
        </div>
        <span className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
