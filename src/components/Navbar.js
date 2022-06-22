import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { AuthService } from "../services/auth.service";
import { UserContext } from "../services/UserContext";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const userContext = useContext(UserContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NotreGrandBleu
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link className="nav-links" onClick={closeMobileMenu}>
                Services <i className="fas fa-caret-down" />
                {dropdown && <Dropdown />}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-links" onClick={closeMobileMenu}>
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link className="nav-links" onClick={closeMobileMenu}>
                About us <i className="fas fa-caret-down" />
                {dropdown1 && <Dropdown />}
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button &&
            (userContext?.user ? (
              <Button
                onClick={() => {
                  AuthService.logout();
                  userContext.setUser(null);
                }}
                buttonStyle="btn--outline"
              >
                Log out
              </Button>
            ) : (
              <Button link="sign-up" buttonStyle="btn--outline">
                Admin Sign-Up
              </Button>
            ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
