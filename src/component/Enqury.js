import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const apiKey = process.env.REACT_APP_API_KEY;
const EnquiryForm = () => {
  const [showModal, setShowModal] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  function saveData() {
    let data = { mobileNumber, name, email, comment};

   fetch(`${apiKey}/api/comments`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        toast.success("Your enquiry has been submitted successfully");
      })
      .catch((error) => {
        toast.error("Try Again");
      });
  }
  const handleToggle = () => {
    setShowModal(!showModal);
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data here or send it to a server
   
    // Clear the form fields after submission (if needed)
    setMobileNumber("");
    setName("");
    setEmail("");
    setComment("");
    // Close the form after submission (if needed)
    setShowModal(false);
  };

  return (
    <div>
       <ToastContainer className="custom-toast-container" style={{zIndex:"1000"}} />
      
      <Modal show={showModal} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              paddingLeft: "28%",
              fontSize: "17px",
              fontWeight: "800",
              color: "blue",
            }}
          >
            Kindly Fill The Form - We Will Contact You Soon!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mymodal" >
        <div className=" col-sm-12 enquricol"style={{ display: "flex",margin:"auto" }}>
      {/* Image */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <img
          src={require('../component/image/enquiry_img2.png')}
          className="myenquri"
          alt="Enquri"
          style={{ maxWidth: "95%", height: "auto" }}
        />
      </div>
     

      <div style={{ flex: "1", padding: "10px" }}>
          <form onSubmit={handleFormSubmit}>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                color: "orangered",
                fontSize:"21px"
              }}
            >
              Mobile Number:
              <input
                type="text"
                maxlength="10"
               
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required style={{height:"5vh",borderRadius:"9px"}}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                color: "orangered",
                fontSize:"21px"
              }}
            >
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required style={{height:"5vh",borderRadius:"9px"}}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                color: "orangered",
                fontSize:"21px"
              }}
            >
              Email ID:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required style={{height:"5vh",borderRadius:"9px"}}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                color: "orangered",
                fontSize:"21px"
              }}
            >
              Message:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required style={{borderRadius:"9px",height:"10vh"}}
              ></textarea>
            </label>
            <div className="btttn text-center" style={{ margin: "10px" }}>
              <Button  type="submit"  style={{ fontSize: "16px",color:"black",border:"1px solid blue",backgroundColor:"AppWorkspace" }} onClick={saveData}>
                Submit
              </Button>
            </div>
          </form>
          </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EnquiryForm;
