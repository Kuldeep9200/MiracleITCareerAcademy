import React from "react";
import "../examples/plased/plays.css";
const AboutCard = () => {
  return (
    <>
      <h3 className="ourvision" style={{ textAlign: "center" }}>
        {" "}
        Our Values
      </h3>
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ margin: "20px" }}
      >
        <div className="col adoutmycard">
          <div className="card h-100 card11 my-card">
            <div className="circle-wrapper">
              <div className="error circle" />
              <div className="icon">
                <img
                  src={require("../component/image/excellencer.png")}
                  style={{ width: "100%", borderRadius: "50px" }}
                  className="fa fa-times"
                  alt="miracle infosarv1"
                />
              </div>
            </div>

            <div className="card-body">
              <h5 className="card-title mycard text-center">Excellence</h5>
              <p className="card-text mytext1">
              Strive for quality in all facets of the education and training provided, including the course material, the delivery technique, the surroundings, and the support services.

              </p>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100 card11 my-card">
            <div className="circle-wrapper">
              <div className="error circle" />
              <div className="icon">
                <img
                  src={require("../component/image/inovationlogo.png")}
                  style={{ width: "100%", borderRadius: "50px" }}
                  className="fa fa-times"
                  alt="miracle infosarv"
                />
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title mycard text-center">Innovation</h5>
              <p className="card-text mytext1">
              To keep up with the most recent advancements in the field, embrace and support innovation in technology, instructional methods, and curriculum development.

              </p>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100 card11 my-card">
            <div className="circle-wrapper">
              <div className="error circle" />
              <div className="icon">
                <img
                  src={require("../component/image/handshakepro.webp")}
                  style={{ width: "100%", borderRadius: "50px" }}
                  className="fa fa-times"
                  alt="Miracle infosarv2"
                />
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title mycard text-center">Professionalism</h5>
              <p className="card-text mytext1">
              Encourage employees and students to behave ethically and professionally, as well as to uphold the principles of honesty, integrity, and accountability.

              </p>
            </div>
          </div>
        </div>
        <div className="col adoutmycard">
          <div className="card h-100 card11 my-card">
            <div className="circle-wrapper">
              <div className="error circle" />
              <div className="icon">
                <img
                  src={require("../component/image/collarationlogor.png")}
                  style={{ width: "100%", borderRadius: "50px" }}
                  className="fa fa-times"
                  alt="miracle infosarv3"
                />
              </div>
            </div>
            <div className="card-body ">
              <h5 className="card-title mycard text-center">Collaboration</h5>
              <p className="card-text mytext1">
              To improve the educational experience, promote teamwork and collaboration among the teachers, staff, and students with business leaders and other educational institutions.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
