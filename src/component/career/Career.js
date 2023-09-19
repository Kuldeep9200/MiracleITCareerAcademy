import { IoSchoolOutline } from "react-icons/io5";
import { MdPersonPin } from "react-icons/md";
import { cloneElement } from "react";
import { MdPushPin } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify.ems.mjs';
import "./career.css";
import { useState, useEffect } from "react";

import 'react-toastify/dist/ReactToastify.css';
export const apiKey = process.env.REACT_APP_API_KEY;
const Career = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [class10th, setClass10th] = useState("");
  const [class12th, setClass12th] = useState("");
  const [experience, setExeperience] = useState("");
  const [skills, setSkills] = useState("");
  const [degree, setDegree] = useState("");
  const [degreemarks, setDegreemarks] = useState("");
  const [resumePath, setResumePath] = useState("");
  function saveData() {
    let data = {
      mobileNumber,
      name,
      email,
      class10th,
      class12th,
      experience,
      degree,
      degreemarks,
      resumePath,
    };

    fetch(`${apiKey}/api/submit`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        toast.success("Your application  has submitted successfully");
       
      })
      .catch((error) => {
        toast.error("Try Again");
      });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data here or send it to a server
    console.log("Mobile Number:", mobileNumber);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Class10th:", class10th);
    console.log("Class12th:", class12th);
    console.log("Experience:", experience);
    console.log("skills:", skills);
    console.log("degree", degree);
    console.log("degreemarks", degreemarks);
    console.log("resumePath", resumePath);

    // Clear the form fields after submission (if needed)
    setMobileNumber("");
    setName("");
    setEmail("");
    setClass10th("");
    setClass12th("");
    setExeperience("");
    setSkills("");
    setDegree("");
    setDegreemarks("");
    setResumePath("");
    // Close the form after submission (if needed)
  };
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <ToastContainer className="custom-toast-container" style={{zIndex:"1000"}} />
      <div className="blogcontcource">
        <div className="row">
          <div
            className="col-sm-6 mb-3 mb-sm-0 bloghead"
            style={{ padding: "5%" }}
          >
            <h1
              style={{
                color: "white",
                fontFamily: "initial",
                fontWeight: "800",
              }}
            >
              {" "}
              Want to break out of the box?
            </h1>
            <p className="program11 animated-paragraph"
              style={{
                color: "white",
             
               
              }}
            >
              Join Miracle Placement Assistance Program - the leading platform to get yourself placed in a
              dynamic team that thrives on growth and innovation. We are seeking
              skilled individuals like you to join our 200+ recruitment partners on their exciting journey.
            </p>
          </div>
          <div
            className="col-sm-6"
            style={{ textAlign: "center", padding: "2%" }}
          >
            <img
              src={require("../image/rcarrerimg.png")}
              className="blogs1"
              alt="blogimg"
            />
          </div>
        </div>
      </div>

      <div
        className="row row-cols-1 row-cols-md-3 g-4 "
        style={{ width: "80%", margin: "auto" }}
      >
        <div className="col career-box adoutmycard">
          <div className="card h-100">
            <div className="card-body">
              <h3
                className="card-title"
                style={{
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginLeft: "16px",
                }}
              >
                Full Stack Developer
              </h3>
              <ul style={{ marginTop: "10px" }}>
                <li className="posts">
                  {" "}
                  <IoSchoolOutline className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Experience</strong> :
                  Fresher
                </li>
                <li className="posts">
                  {" "}
                  <MdPersonPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Location</strong> :
                  Bangalore
                </li>
                <li className="posts">
                  {" "}
                  <MdPushPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Type</strong> : Full
                  Time / Permanent
                </li>
                <li className="posts">
                  {" "}
                  <MdCalendarMonth className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Posted On : </strong>
                  18-Aug-23
                </li>
                <button className="bttn" style={{ marginTop: "20px" }}>
                  <a
                    href="#hereapply"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Apply Now
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100">
            <div className="card-body">
              <h3
                className="card-title"
                style={{
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginLeft: "16px",
                }}
              >
                Software Developer
              </h3>
              <ul style={{ marginTop: "10px" }}>
                <li className="posts">
                  {" "}
                  <IoSchoolOutline className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Experience</strong> : 2
                  to 4 Years{" "}
                </li>
                <li className="posts">
                  {" "}
                  <MdPersonPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Location</strong> :
                  Indore (M.P)
                </li>
                <li className="posts">
                  {" "}
                  <MdPushPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Type</strong> : Full
                  Time / Permanent
                </li>
                <li className="posts">
                  {" "}
                  <MdCalendarMonth className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Posted On</strong> :
                  1-Sept-23
                </li>
                <button className="bttn" style={{ marginTop: "20px" }}>
                  <a
                    href="#hereapply"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Apply Now
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100">
            <div className="card-body">
              <h3
                className="card-title"
                style={{
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginLeft: "16px",
                }}
              >
                System Administator
              </h3>
              <ul style={{ marginTop: "10px" }}>
                <li className="posts">
                  {" "}
                  <IoSchoolOutline className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Experience</strong> : 2
                  to 4 Years{" "}
                </li>
                <li className="posts">
                  {" "}
                  <MdPersonPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Location</strong> :
                  Bhopal (M.P)
                </li>
                <li className="posts">
                  {" "}
                  <MdPushPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Type</strong> : Full
                  Time / Permanent
                </li>
                <li className="posts">
                  {" "}
                  <MdCalendarMonth className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Posted On</strong> :
                  28-Aug-23
                </li>
                <button className="bttn" style={{ marginTop: "20px" }}>
                  <a
                    href="#hereapply"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Apply Now
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100">
            <div className="card-body">
              <h3
                className="card-title"
                style={{
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginLeft: "16px",
                }}
              >
                IT Infrastructure Engineer
              </h3>
              <ul style={{ marginTop: "10px" }}>
                <li className="posts">
                  {" "}
                  <IoSchoolOutline className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Experience</strong> : 4
                  to 7 Years{" "}
                </li>
                <li className="posts">
                  {" "}
                  <MdPersonPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Location</strong> :
                  Pune
                </li>
                <li className="posts">
                  {" "}
                  <MdPushPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Type</strong> : Full
                  Time / Permanent
                </li>
                <li className="posts">
                  {" "}
                  <MdCalendarMonth className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Posted On</strong> :
                  20-July-23
                </li>
                <button className="bttn" style={{ marginTop: "20px" }}>
                  <a
                    href="#hereapply"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Apply Now
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100">
            <div className="card-body">
              <h3
                className="card-title"
                style={{
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginLeft: "16px",
                }}
              >
                Business Analyst
              </h3>
              <ul style={{ marginTop: "10px" }}>
                <li className="posts">
                  {" "}
                  <IoSchoolOutline className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Experience</strong> : 2
                  to 4 Years{" "}
                </li>
                <li className="posts">
                  {" "}
                  <MdPersonPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Location</strong> :
                  Noida
                </li>
                <li className="posts">
                  {" "}
                  <MdPushPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Type</strong> : Full
                  Time / Permanent
                </li>
                <li className="posts">
                  {" "}
                  <MdCalendarMonth className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Posted On</strong> :
                  31-July-23
                </li>

                <button className="bttn" style={{ marginTop: "20px" }}>
                  <a
                    href="#hereapply"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Apply Now
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100">
            <div className="card-body">
              <h3
                className="card-title"
                style={{
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginLeft: "16px",
                }}
              >
                Web Developer
              </h3>
              <ul style={{ marginTop: "10px" }}>
                <li className="posts">
                  {" "}
                  <IoSchoolOutline className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Experience</strong> : Fresher{" "}
                </li>
                <li className="posts">
                  {" "}
                  <MdPersonPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Location</strong> :
                  Bhopal(M.P)
                </li>
                <li className="posts">
                  {" "}
                  <MdPushPin className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Type</strong> : Full
                  Time / Permanent
                </li>
                <li className="posts">
                  {" "}
                  <MdCalendarMonth className="icons" />
                  <strong style={{ marginLeft: "8px" }}>Posted On</strong> :
                  1-Sept-23
                </li>

                <button className="bttn" style={{ marginTop: "20px" }}>
                  <a
                    href="#hereapply"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Apply Now
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row rowresume"
        id="hereapply"
        style={{
          backgroundColor: "#1b1b7a",
          marginTop: "50px",
          padding: "22px",
          paddingLeft: "5%",
        }}
      >
        <div className="col-sm-6 mb-3 mb-sm-0 colsm66">
          <h2
            style={{ textAlign: "center", color: "white", fontWeight: "800" }}
          >
            {" "}
            Apply Now
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div
              className="apply1"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                className="imput11"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name*"
              />
              <input
                type="text"
                className="imput11"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
              />
            </div>
            <div
              className="apply1"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                className="imput11"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile*"
              />
              <input
                type="text"
                className="imput11"
                value={class10th}
                onChange={(e) => setClass10th(e.target.value)}
                placeholder="Class 10th Marks*"
              />
            </div>
            <div
              className="apply1"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                className="imput11"
                value={class12th}
                onChange={(e) => setClass12th(e.target.value)}
                placeholder="Class 12th Marks*"
              />
              <input
                type="text"
                className="imput11"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Graduation degree*"
              />
            </div>
            <div
              className="apply1"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                className="imput11"
                value={degreemarks}
                onChange={(e) => setDegreemarks(e.target.value)}
                placeholder="Graduation degree Marks*"
              />
              <input
                type="text"
                className="imput11"
                value={experience}
                onChange={(e) => setExeperience(e.target.value)}
                placeholder="Years of Experience*"
              />
            </div>
            <div
              className="apply1"
              style={{ display: "flex", marginTop: "20px" }}
            >
              <input
                type="text"
                className="imput11"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                style={{ width: "96%", marginLeft: "12px" }}
                placeholder="Skills*"
              />
            </div>
            {/* <div className="apply1" style={{ marginTop: "20px" }}>
             
              <NavLink to="https://forms.gle/dfEzAjMerQQRYEFY7">
              <input
               
                className="imput11"
               
                style={{
                  width: "96%",
                  marginLeft: "12px",
                  backgroundColor: "white",
                  padding: "9px",
                  cursor:"pointer"
                }}
                placeholder="uplod your file*"
              />
              </NavLink>
            </div> */}

            <p style={{ margin: "10px", color: "wheat" }}>
              The file should not exceed 1mb
            </p>

            <button type="submit" className="resumsub" onClick={saveData}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-6 colsm66">
          <div
            className="applycont"
            style={{
              backgroundColor: "whitesmoke",
              padding: "50px",
              marginTop: "30px",
              marginRight: "20px",
              width: "80%",
              borderRadius: "10px",
            }}
          >
            <h2
              className="getin"
              style={{ lineHeight: "26px", fontSize: "26px" }}
            >
              Feel Free To Get In Touch
            </h2>
            <h5
              className="getin2"
              style={{
                lineHeight: "26px",
                color: "#ff214f",
                fontWeight: "500",
              }}
            >
              Send us your resume now
            </h5>
            <p
              className="getin3"
              style={{ lineHeight: "29px", color: "#536d6d;" }}
            >
              Miracle Group is a team of experts and we specialize in
              delivering IT Solutions, training and placements through our technical
              expertise, understanding of varied domains with extensive
              experience and deep passion for customer satisfaction is our motivation.
              We believe in highest level of quality and partnership, to provide the best
              service to our students, our clients, and other stakeholders thus building great relationships not just
              for a single project but for a lifetime.
            </p>
            <h5
              className="getin2"
              style={{ lineHeight: "26px", fontWeight: "500" }}
            >
              Email : info@miracleitindia.com
            </h5>
            <h5
              className="getin2"
              style={{ lineHeight: "26px", fontWeight: "500" }}
            >
              Contact : +91 788-000-3127
            </h5>
          </div>
        </div>
      </div>

      <div className="containerem">
        <p>Send us your resume now</p>
        <button type="button" style={{ margin: "7px" }}>
          <a
            href="mailto:hr.misbhopal@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            Email Now
          </a>
        </button>
      </div>
    </>
  );
};

export default Career;
