import { NavLink } from "react-router-dom";

import "./nav.css";
import { useState } from "react";
const Navbarbb = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //   const closeNav = () => {
  //     setIsNavOpen(false);
  //   };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={require("../image/newlogo.jpeg")}
              className="logoimg"
              alt="Miracle logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/cource"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Course
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/maincource">
                      PGDSE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource1">
                      PGDFSE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource2">
                      PGDIE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource3">
                      Full Stack MERN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource4">
                      Full Stack MEAN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource5">
                      Full Stack Java
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource6">
                      Full Stack Python
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource7">
                      Backend Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource8">
                      Frontend Development
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/maincource9">
                      Data Anlytics
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hire">
                Recruiters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/career">
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form class="d-flex myflexbutton">
              <button
                class="btn btn1b btn-outline-success"
                type="submit"
              >
              <a href="tel:+917880003127" style={{textDecoration:"none",fontWeight:"700",fontSize:"20px",color:"orangered"}}>+91 7880003127</a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarbb;
