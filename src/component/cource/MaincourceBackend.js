import React from "react";
import "./cource.css";
const MaincourceBackend = () => {
    const cardData = [
        { imageSrc: require("../image/php.png"), altText: "MongoDB Image 7" },
    
        {
          imageSrc: require("../image/php-unit.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/laravel.png"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/mysql.png"),
          altText: "MongoDB Image 4",
        },
    
       
        {
          imageSrc: require("../image/mongo-db-1.png"),
          altText: "MongoDB Image 6",
        },
        {
          imageSrc: require("../image/postgresql.png"),
          altText: "MongoDB Image 6",
        },

      ];
      const cardData1 = [
        { imageSrc: require("../image/node-js-1.png"), altText: "MongoDB Image 7" },
    
        {
          imageSrc: require("../image/express-js-1.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/nestjs-1.png"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/jest.png"),
          altText: "MongoDB Image 4",
        },
    
       
        {
          imageSrc: require("../image/mongo-db-1.png"),
          altText: "MongoDB Image 6",
        },
        {
          imageSrc: require("../image/postgresql.png"),
          altText: "MongoDB Image 6",
        },
        {
            imageSrc: require("../image/mysql.png"),
            altText: "MongoDB Image 6",
          },

      ];
      const cardData2 = [
       
        {
          imageSrc: require("../image/python.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/Django1.webp"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/flask-1.png"),
          altText: "MongoDB Image 4",
        },
        {
            imageSrc: require("../image/rest-framework-1.png"),
            altText: "MongoDB Image 4",
          },
       
        {
          imageSrc: require("../image/mongo-db-1.png"),
          altText: "MongoDB Image 6",
        },
        {
          imageSrc: require("../image/postgresql.png"),
          altText: "MongoDB Image 6",
        },
        {
            imageSrc: require("../image/mysql.png"),
            altText: "MongoDB Image 6",
          },

      ];
      const cardData3 = [
       
        {
          imageSrc: require("../image/java.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/spring.png"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/spring-boot.png"),
          altText: "MongoDB Image 4",
        },
        {
            imageSrc: require("../image/junit.png"),
            altText: "MongoDB Image 4",
          },
       
        {
          imageSrc: require("../image/mongo-db-1.png"),
          altText: "MongoDB Image 6",
        },
        {
          imageSrc: require("../image/postgresql.png"),
          altText: "MongoDB Image 6",
        },
        {
            imageSrc: require("../image/mysql.png"),
            altText: "MongoDB Image 6",
          },

      ];
  return (
    <>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-sm-12" style={{ margin: "auto" }}>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item myaccordation">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed mycollapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{ borderRadius: "19px" }}
                >
                  Backend development with PHP
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body mybody">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {cardData.map((card, index) => (
                      <div className="cardpc cardccc" key={index}>
                        <img
                          src={card.imageSrc}
                          alt={card.altText}
                          className="cardpc-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item myaccordation">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed mycollapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{ borderRadius: "19px" }}
                >
                  Backend development with Node js
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body mybody">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {cardData1.map((card, index) => (
                      <div className="cardpc cardccc " key={index}>
                        <img
                          src={card.imageSrc}
                          alt={card.altText}
                          className="cardpc-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item myaccordation">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed mycollapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{ borderRadius: "19px" }}
                >
                  Backend development with Python
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body mybody">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {cardData2.map((card, index) => (
                      <div className="cardpc cardccc" key={index}>
                        <img
                          src={card.imageSrc}
                          alt={card.altText}
                          className="cardpc-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item myaccordation">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed mycollapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                  style={{ borderRadius: "19px" }}
                >
                  Backend development with Java
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body mybody">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {cardData3.map((card, index) => (
                      <div className="cardpc cardccc" key={index}>
                        <img
                          src={card.imageSrc}
                          alt={card.altText}
                          className="cardpc-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaincourceBackend;
