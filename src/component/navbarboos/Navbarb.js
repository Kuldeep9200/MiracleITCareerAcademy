import { NavLink } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

const Navbarbb = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the mobile navigation menu
  const closeNav = () => {
    setIsNavOpen(false);
  };

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
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={closeNav} 
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeNav} >
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
                    <NavLink className="dropdown-item" to="/maincource"  onClick={closeNav} >
                      PGDSE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource1"   onClick={closeNav} >
                      PGDFSE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource2"   onClick={closeNav} >
                      PGDIE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource3"   onClick={closeNav} >
                      Full Stack MERN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource4"   onClick={closeNav} >
                      Full Stack MEAN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource5"   onClick={closeNav} >
                      Full Stack Java
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource6"   onClick={closeNav} >
                      Full Stack Python
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource7"   onClick={closeNav} >
                      Backend Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/maincource8"   onClick={closeNav} >
                      Frontend Development
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/maincource9"   onClick={closeNav} >
                      Data Anlytics
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog"   onClick={closeNav} >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hire"   onClick={closeNav} >
                Recruiters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/career"   onClick={closeNav} >
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact"   onClick={closeNav} >
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
