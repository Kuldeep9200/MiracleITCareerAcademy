import React from "react";

const Alert = () => {
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
  <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000" // Set the interval to 10 seconds (10000 milliseconds)
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={require('../../component/image/Banner (14).png')} className="d-block w-100" alt="Miracle infoserv" />
      </div>
      <div className="carousel-item">
        <img src={require('../../component/image/Banner (15).png')} className="d-block w-100" alt="Miracle infoserv" />
      </div>
      <div className="carousel-item">
        <img src={require('../../component/image/Banner (16).png')} className="d-block w-100" alt="Miracle infoserv" />
      </div>
    </div>
  </div>
</div>

  );
};

export default Alert;
