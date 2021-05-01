import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./Navbar.css";
import $ from "jquery";

const Navbar = () => {
  const { user } = useContext(UserContext);
  console.log("LLEGA LA NAVBAR");
  useEffect(() => {
    $(".navTrigger").on(function () {
      $(this).toggleClass("active");
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
    $(window).scroll(function () {
      if ($(document).scrollTop() > 2) {
        $(".nav").addClass("affix");
        console.log("OK");
      } else {
        $(".nav").removeClass("affix");
      }
    });
  },[]);

  return (
    
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="/">Your Logo</a>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li>
              <a href="/">Profile</a>
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
