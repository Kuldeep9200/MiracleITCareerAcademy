import React from 'react'

const MaincourceFront = () => {
    const cardData = [
        { imageSrc: require("../image/react-js-1.png"), altText: "MongoDB Image 7" },
    
        {
          imageSrc: require("../image/redux.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/react-router.png"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/material-ui.png"),
          altText: "MongoDB Image 4",
        },
        {
            imageSrc: require("../image/nextjs-1.png"),
            altText: "MongoDB Image 4",
          },
      
       
        {
          imageSrc: require("../image/typescript.png"),
          altText: "MongoDB Image 6",
        },
        {
          imageSrc: require("../image/junit.png"),
          altText: "MongoDB Image 6",
        },

      ];
      const cardData1 = [
        
    
        {
          imageSrc: require("../image/angular-1.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/angular-material.png"),
            altText: "MongoDB Image 6",
          },
          {
            imageSrc: require("../image/rxjs.png"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/material-ui.png"),
          altText: "MongoDB Image 4",
        },
        {
            imageSrc: require("../image/redux.png"),
            altText: "MongoDB Image 4",
          },
      
       
        {
          imageSrc: require("../image/typescript.png"),
          altText: "MongoDB Image 6",
        },
        {
          imageSrc: require("../image/junit.png"),
          altText: "MongoDB Image 6",
        },
       
       

      ];
      const cardData2 = [
       
        {
          imageSrc: require("../image/vue.png"),
          altText: "MongoDB Image 10",
        },
        {
            imageSrc: require("../image/vuex-router.png"),
            altText: "MongoDB Image 6",
          },
        {
          imageSrc: require("../image/vuex-router.png"),
          altText: "MongoDB Image 4",
        },
        {
            imageSrc: require("../image/vuetify.png"),
            altText: "MongoDB Image 4",
          },
       
        {
            imageSrc: require("../image/typescript.png"),
            altText: "MongoDB Image 6",
          },
          {
            imageSrc: require("../image/junit.png"),
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
                 Frontend development with React.js
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
                 Frontend development with Angular.js
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
                  Frontend development with Vue.js
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
            
          </div>
        </div>
      </div>



    </>
  )
}

export default MaincourceFront