import { useEffect } from "react";
import "./blog.css";
import { NavLink } from "react-router-dom";
const Blog = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blogcontcource">
        <div className="row">
          <div
            className="col-sm-12 mb-3 mb-sm-0 bloghead"
            style={{ padding: "5%" }}
          >
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              {" "}
              Know About IT Industry
            </h1>
            <p
              className="blogcont2"
              style={{ textAlign: "center", paddingBottom: "30px" }}
            >
              {" "}
              We provide a platform for individuals and organizations to share
              their knowledge and expertise on a particular subject with others.
            </p>
          </div>
        </div>
      </div>
      <h3
        style={{
          textAlign: "center",
          margin: "20px",
          color: "white",
          fontFamily: "emoj",
          fontWeight: "800",
        }}
      >
        {" "}
        Our Popular Blogs!
      </h3>
      <div className="row blogrow" style={{ width: "90%", margin: "auto" }}>
        <div className="col-sm-3 mb-3 mb-sm-0 adoutmycard">
          <div className="card h-100 cardblog1 my-cardpp">
            <img
              src={require("../image/1.png")}
              class="card-img-top"
              alt="miracle infosarv5"
            />
            <div className="card-body text-center">
              <h5 className="card-title mycardtitel">
                What is the necessity of AI in the post-COVID-19 era?
              </h5>
              <hr />
              <NavLink to="/blogai">
                <button className="read-more-btn"> Read More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-3 adoutmycard">
          <div className="card h-100 cardblog1 my-cardpp">
            <img
              src={require("../image/2.png")}
              class="card-img-top blogimage"
              alt="miracle infosarv4"
            />
            <div className="card-body text-center">
              <h5 className="card-title mycardtitel">
                Why Cyber security is important in post COVID-19 era
              </h5>
              <hr />
              <NavLink to="/blogcovid">
                <button className="read-more-btn"> Read More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-3 adoutmycard">
          <div className="card h-100 cardblog1 my-cardpp">
            <img
              src={require("../image/3.png")}
              class="card-img-top blogimage"
              alt="miracle infosarv3"
            />
            <div className="card-body text-center">
              <h5 className="card-title mycardtitel">
                100 potential interview questions
              </h5>
              <br />
              <hr />
              <NavLink to="/special100q">
                {" "}
                <button className="read-more-btn"> Read More</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="col-sm-3 adoutmycard">
          <div className="card h-100 cardblog1 my-cardpp">
            <img
              src={require("../image/4.png")}
              class="card-img-top blogimage"
              alt="miracle infosarv2"
            />
            <div className="card-body text-center">
              <h5 className="card-title mycardtitel">
                General Guidelines for answering the interview questions
              </h5>
              <hr />

              <NavLink to="/interview1">
                <button className="read-more-btn"> Read More</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
