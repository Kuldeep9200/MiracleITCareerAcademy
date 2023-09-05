import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./guranty.css"
const GurantyCard = () => {
  return (
    <div>
      <MDBRow
        className="row-cols-1 row-cols-md-3 g-4"
        style={{ width: "90%", margin: "auto" }}
      >
        <MDBCol className="mycourcecard11"  style={{padding:"10px"}}>
          <MDBCard className="h-100  mycourcecard1">
            <MDBCardImage
              src={require("../image/placement.jpg")}style={{borderRadius:"34px"}}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="homeh text-center">Placement Training</MDBCardTitle>
              <MDBCardText className="homep">
              After successfully completing their IT training, our extensive instruction provides students with the knowledge, abilities, and resources they need to find an employment opportunity that corresponds with their career aspirations

              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="mycourcecard11">
          <MDBCard className="h-100 mycourcecard1">
            <MDBCardImage
              src={require("../image/courseback.jpg")} style={{borderRadius:"34px"}}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="homeh text-center">
                Industry-ready IT Expert
              </MDBCardTitle>
              <MDBCardText className="homep">
                {" "}
                You can take a course from Miracle IT Career Academy that blends coding knowledge with soft skills, personality development, and logical thinking. We take on the burden of transforming you into an IT professional who is prepared for competition.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="mycourcecard11">
          <MDBCard className="h-100 mycourcecard1">
            <MDBCardImage
              src={require("../image/100jobass.jpg")}style={{borderRadius:"34px"}}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="homeh text-center">100% Job Assurance</MDBCardTitle>
              <MDBCardText className="homep">
              Our money-back guarantee scheme is an expression of our dedication towards our students. In the fulfillment of this Agreement, we offer our students engaged in our placement guarantee courses a 100% placement opportunity or a complete refund.

              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default GurantyCard;
