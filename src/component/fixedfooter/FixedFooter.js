import {useState} from "react";
import "./footer.css";
import { SiWhatsapp } from "react-icons/si";
import { NavLink } from "react-router-dom";
import EnquiryForm from "../Enqury";
const FixedFooter = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => {
    setShowEnquiryForm(!showEnquiryForm);
  };
  return (
    <div>
      <div className="footerfixd">
      <form class="d-flex myflexbutton1">
              <button
                class="btn btn1ba btn-outline-success"
                type="submit"
              >
                Book a Session
              </button>
            </form>
        <div className="footer1text">
          <h2 className="footerfixedtext">
             Inquire now! Or Call/Message us on WhatsApp!
          </h2>
        </div>
        <div className="footer2icon" style={{ display: "flex" }}>
          <div className="enquiry-modal-btn" onClick={toggleEnquiryForm}>Click to Inquire</div>
          {showEnquiryForm && <EnquiryForm />}
          <NavLink
            to="https://api.whatsapp.com/send?phone=+917880003127"
            className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
          >
            <SiWhatsapp style={{ fontSize: "35px", color: "white" }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FixedFooter;
