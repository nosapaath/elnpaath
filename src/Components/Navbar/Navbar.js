import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  //   const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     } else {
  //       setButton(true);
  //     }
  //   };

  //   useEffect(() => {
  //     showButton();
  //   }, []);
  //   window.addEventListener("resize", showButton);

  return (
    <>
      <div className="nav-wrapper">
        <div className="brand-top">
          <img className="logo-img" src="images/eln1.jpg" alt="elndraws" />
          <div className="name-title">eln paath</div>
        </div>
        <div className="navbar">
          <div className="navbar-container container">
            <div className="menu-icon" onClick={closeMobileMenu}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/shop"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  SHOP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
