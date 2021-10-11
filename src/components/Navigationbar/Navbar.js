import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { GiPodiumWinner } from "react-icons/gi";

function Navbar() {
  //toggle
  const [click, setClick] = useState(false);
  // const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //change bg
  const [navbg, setNavbg] = useState(false);

  const changeBg = () => {
    // alert(window.scrollY);
    if (window.scrollY >= 90) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        className={navbg ? " z-depth-0  lb_active " : " z-depth-0 lb_nav_wrap"}
      >
        <div class="nav-wrapper ">
          <Link to="/" class="brand-logo left myLogo">
            <GiPodiumWinner style={{ fontWeight: "bold" }} size={30} />
            Visionary
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />{" "}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/programmes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/programmes"
                className="nav-links btn white-text indigo darken-4
"
                onClick={closeMobileMenu}
              >
                Book Session
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
