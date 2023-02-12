import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api_logout } from "../../api/network";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // read for cookie jwtr
    if (localStorage.getItem("userId")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [localStorage.getItem("userId")]);

  return (
    <div>
      <nav className="navbar">
        <div id="trapezoid">
          {/* <a href="#home" className="sub-home">
            Home
          </a> */}
          <Link to="/">
            <div className="subnav">Home</div>
          </Link>

          <Link to="/contact">
            <div className="subnav">
              Contact<i className="fa fa-caret-down"></i>
            </div>
          </Link>
          {!isLogin ? (
            <>
              <Link to="/login">
                <div className="subnav">
                  Login<i className="fa fa-caret-down"></i>
                </div>
              </Link>

              <Link to="/sign-up">
                <div className="subnav">Sign-Up</div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">
                <div className="subnav">
                  My Profile<i className="fa fa-caret-down"></i>
                </div>
              </Link>
              <Link to="/">
                <div className="subnav" onClick={api_logout}>
                  Logout<i className="fa fa-caret-down"></i>
                </div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
