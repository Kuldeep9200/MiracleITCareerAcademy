import { useEffect } from "react";
import "./contact.css";
// import { GrLocation } from 'react-icons/gr';
import styled from "styled-components";
const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const Wrapper = styled.section`
    text-align: center;

    .container {
      // margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="blogcontcource">
        <div className="row">
          <div
            className="col-sm-12 mb-3 mb-sm-0 bloghead"
            style={{ padding:"5%" }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
              }}
            >
              {" "}
              We are here to assist you!!
            </h1>
            <p
              className="blogcont2"
              style={{
                color: "white",
                textAlign:"center",
                paddingBottom:"82px"
              }}
            >
              Our team of experts is always here to support you and provide
              guidance, ensuring that all your inquiries are promptly addressed
              with the utmost care and attention.
            </p>
          </div>
          
        </div>
      </div>
      <h2 className="common-heading"> OUR PRESENCE </h2>
      <div className="containercontact">
        <div className="row contactrow" style={{ padding: "20px" }}>
          <div className="col-sm-4 mb-3 mb-sm-0 mycontactcard" >
            <div
              className="card contactcard "
              style={{ backgroundColor: "#eeeeeec9" }}
            >
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="imgpart" style={{ display: "flex" }}>
                  <img
                    src={require("../image/locationimgr.png")}
                    className="locationimag"
                    style={{ height: "5vh" }}
                    alt="Miracle location"
                  />
                  <h5 className="card-title placec"> Bhopal</h5>
                </div>
                <p className="card-text locationcenter">
                  Plot No.80, 3rd Floor, Aakriti Complex, 
                  Zone-II, M.P Nagar, Bhopal M.P.
                </p>
                <p className="phonenumber"> Ph. 0755 4907790, +91 9179001399</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 mycontactcard" >
            <div
              className="card contactcard "
              style={{ backgroundColor: "#eeeeeec9" }}
            >
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="imgpart" style={{ display: "flex" }}>
                  <img
                    src={require("../image/locationimgr.png")}
                    className="locationimag"
                    style={{ height: "5vh" }}
                    alt="Miracle location"
                  />
                  <h5 className="card-title placec">Jabalpur</h5>
                </div>
                <p className="card-text locationcenter">
                  2nd Floor, In Front of Maruti Suzuki Showroom,
                  Jabalpur Hospital Road, Napier Town, Jabalpur, M.P.
                </p>
                <p className="phonenumber"> Ph. 0761-4920378, +91 9179004399</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 mycontactcard" >
            <div
              className="card contactcard "
              style={{ backgroundColor: "#eeeeeec9" }}
            >
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="imgpart" style={{ display: "flex" }}>
                  <img
                    src={require("../image/locationimgr.png")}
                    className="locationimag"
                    style={{ height: "5vh" }}
                    alt="Miracle location"
                  />
                  <h5 className="card-title placec">Gwalior</h5>
                </div>
                <p className="card-text locationcenter">
                  A-8,201, 2nd Floor, Opp. Aditya College,
                  City Center, Gwalior, M.P.
                </p>
                <p className="phonenumber"> Ph. 0751-4901188,+91 9179007399 </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 mycontactcard" >
            <div
              className="card contactcard "
              style={{ backgroundColor: "#eeeeeec9" }}
            >
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="imgpart" style={{ display: "flex" }}>
                  <img
                    src={require("../image/locationimgr.png")}
                    className="locationimag"
                    style={{ height: "5vh" }}
                    alt="Miracle location"
                  />
                  <h5 className="card-title placec">Ratlam </h5>
                </div>
                <p className="card-text locationcenter">
                  76, B-Plaza, First Floor, T.I.Y Road corner, Above
                  Raymond Showroom, Station Road, Ratlam, M.P.
                </p>
                <p className="phonenumber"> Ph.07412-403025</p>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4 mb-3 mb-sm-0 mycontactcard"
            // style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div
              className="card contactcard "
              style={{ backgroundColor: "#eeeeeec9" }}
            >
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="imgpart" style={{ display: "flex" }}>
                  <img
                    src={require("../image/locationimgr.png")}
                    className="locationimag"
                    style={{ height: "5vh" }}
                    alt="Miracle location "
                  />
                  <h5 className="card-title placec">Ujjain</h5>
                </div>
                <p className="card-text locationcenter">
                  301, 3rd Floor, Mahakal Kanak,
                  Malipura Dewas Gate, Ujjain, M.P.
                </p>
                <p className="phonenumber"> Ph.0734 4030236</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0 mycontactcard" >
            <div
              className="card contactcard "
              style={{ backgroundColor: "#eeeeeec9" }}
            >
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="imgpart" style={{ display: "flex" }}>
                  <img
                    src={require("../image/locationimgr.png")}
                    className="locationimag"
                    style={{ height: "5vh" }}
                    alt="Miracle location"
                  />
                  <h5 className="card-title placec">Outreach Centers</h5>
                </div>
                <p className="card-text locationcenter">
                Raipur, Bilaspur, Durg, Chhindwara, Satna,
                  Sagar, Nagpur, and Indore
                </p>
                <p className="phonenumber"> Ph.+91 7880003127</p>
              </div>
            </div>
          </div>
          
        </div>

        <div class="col-sm-9 mb-3 mb-sm-0" style={{ margin: "auto" }}>
          <div
            class="card"
            style={{ backgroundColor: "#eeeeeec9" }}
          >
            <div class="card-body" style={{ textAlign: "center" }}>
              <div className="imgpart" style={{ display: "flex" }}>
                <img
                  src={require("../image/locationimgr.png")}
                  className="locationimag"
                  style={{ height: "5vh" }}
                  alt="Miracle location"
                />
                <h5 className="card-title text-center placec">
                  Corporate Office: Plot No.80, 3rd Floor, Aakriti Complex,
                  Zone-II, M.P. Nagar, Bhopal - 462011
                </h5>
              </div>
              {/* <p className="card-text locationcenter">
                Plot No.80,3rd Floor, Aakriti Complex, Zone-II M.P. Nagar,
                Bhopal, M.P. Ph.0755-4907790
              </p> */}
            </div>
          </div>
        </div>

        
      </div>
      <div className="mainlocation" style={{ marginTop: "30px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22167.863984262924!2d77.43777550949874!3d23.224450155731933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43184b9eb5db%3A0x2e4749f6310e2de1!2sMiracle%20Infoserv!5e0!3m2!1sen!2sin!4v1689970313463!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="myFrame"
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default Contact;
