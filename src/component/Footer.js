import React from "react";
import { NavLink } from "react-router-dom";

import Logos from "./logos/Logos";

const Footer = () => {
  return (
    <>
      <Logos />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <NavLink to="/about">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/">our services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Payment policy</NavLink>
                </li>
                <li>
                  <NavLink to="/">certificate program</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <NavLink to="/">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Helpdesk</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Expert Advice</NavLink>
                </li>
                <li>
                  <NavLink to="/">Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4> Our Group</h4>
              <ul>
                <li>
                  <NavLink to="https://miracleinfoserv.com">
                    Miracle Infoserv
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Miracle Infosoft</NavLink>
                </li>
                <li>
                  <NavLink to="https://miracleitskills-poweredbymirac.godaddysites.com/">
                    Miracle IT Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Miracle IT Foundation (CSR)</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links" style={{ marginLeft: "30px" }}>
                <NavLink to="https://www.facebook.com/MiracleITCareerAcademy/">
                  <img
                    src={require("../component/image/Untitled-social (1).png")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>
                <NavLink to="https://www.instagram.com/miracleitcareeracademy/">
                  <img
                    src={require("../component/image/Untitled-social (4).png")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>
                <NavLink to="https://www.linkedin.com/in/miracle-it-career-academy/">
                  <img
                    src={require("../component/image/Untitled-social (5).png")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>

                <NavLink to="/">
                  <img
                    src={require("../component/image/Untitled-social (6).png")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>
              </div>
              <div
                className="social-links imgpart11"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={require("../component/image/Untitled-1 (1).png")}
                  className="locationimag"
                  style={{ height: "4vh" }}
                  alt="Miracle location"
                />
                <h5 className="card-title placec113">
                  M.P Nagar Zone-2 Bhopal
                </h5>
              </div>
              <div
                className="social-links imgpart11"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={require("../component/image/Untitled-2 (1).png")}
                  className="locationimag"
                  style={{ height: "3vh" }}
                  alt="Miracle location"
                />
                <h5
                  className="card-title placec113"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <a href="tel:+917880003127">+91 7880003127</a>
                </h5>
              </div>

              <div
                className="social-links imgpart11"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={require("../component/image/Untitled-3 (1).png")}
                  className="locationimag"
                  style={{ height: "3vh" }}
                  alt="Miracle location"
                />
                <h5 className="card-title placec113">
                  <a
                    href="mailto:info@miracleitindia.com"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    info@miracleitindia.com
                  </a>
                </h5>
              </div>
              <div
                className="social-links imgpart11"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={require("../component/image/downlod.png")}
                  className="locationimag"
                  style={{ height: "8vh" }}
                  alt="Miracle location"
                />
               
              </div>
            </div>
          </div>
          <div className="footer-col myfinacce">
            <h4>Finance Partners</h4>
            <div className="social-links" style={{ marginLeft: "30px" }}>
              <img
                src={require("../component/image/Bajaj.png")}
                className="socialicon11"
                alt="miracle infosarv"
              />
              <img
                src={require("../component/image/Varthana.png")}
                className="socialicon11"
                style={{ backgroundColor: "green" }}
                alt="miracle infosarv"
              />

              <img
                src={require("../component/image/Credence.png")}
                className="socialicon11"
                alt="miracle infosarv"
              />
            </div>
          </div>
          <div className="finance">
            Copyright ©2023- Developed by Miracle Infosoft. All rights reserved
            with Miracle Group®
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
