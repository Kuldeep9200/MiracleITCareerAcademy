import React from "react";
import "./plays.css";
import { useEffect } from "react";
import Alert from "../alert/Alert";
const Compnay = () => {
  const handleScroll = (className) => {
    const cards = document.querySelectorAll(className);
    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect();

      if (cardPosition.top < window.innerHeight) {
        card.classList.add("show-card");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(".backsid"));
    return () => {
      window.removeEventListener("scroll", () => handleScroll(".backsid"));
    };
  }, []);

  return (
    <>
    <Alert/>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "silk",
          fontWeight: "900",
          margin: "30px",
          color: "white",
        }}
      >
       Most Valuable Employers
      </h2>
      <div className="compnaysour">
        <div className="backsid">
          <img
            src={require("../../component/image/Amazon2.png")}
            className="mycompines heightmy" style={{height:"11vh"}}
            alt=" Miracle infosarv 1"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Deloite.png")}
            className="mycompines heightmy"style={{height:"11vh"}}
            alt="Miracle infosarv 2"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Impetus.png")}
            className="mycompines heightmy"style={{height:"11vh"}}
            alt="Miracle infosarv 3"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Intel.png")}
            className="mycompines heightmy"
            alt="Miracle infosarv 5"
          />
        </div>

        <div className="backsid">
          <img
            src={require("../../component/image/Yash.png")}
            className="mycompines heightmy" style={{height:"11vh"}}
            alt="Miracle infosarv 7"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/capegemini-1.png")}
            className="mycompines"
            alt="Miracle infosarv 5"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/ey.png")}
            className="mycompines heightmy"
            alt="Miracle infosarv 6"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Netlink.png")}
            className="mycompines heightmy"
            alt="Miracle infosarv 7"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/mphasis.png")}
            className="mycompines"
            alt="Miracle infosarv 9"
          />
          </div>
          <div className="backsid">
          <img
            src={require("../../component/image/redhat.png")}
            className="mycompines"
            alt="Miracle infosarv 8"
          />
          </div>
          <div className="backsid">
          <img
            src={require("../../component/image/tcs1.png")}
            className="mycompines heightmy"
            alt="Miracle infosarv 4"
          />
          </div>
          <div className="backsid">
          <img
            src={require("../../component/image/accenture.png")}
            className="mycompines"
            alt="Miracle infosarv 11"
          />
          </div>
          {/* <div className="backsid">
          <img
            src={require("../../component/image/Infosys.png")}
            className="mycompines"
            alt="Miracle infosarv 12"
          />
          </div>  */}
        
      </div>

      {/* <Container>
        <div className="mycolum">
          <div className="backsid">
            <Image
              src={require("../../component/image/Amazon2.png")}
              className="mycompines"
              alt="Image 1"
            />
          </div>
          <div className="backsid">
            <Image
              src={require("../../component/image/Deloite.png")}
              className="mycompines"
              alt="Image 2"
            />
          </div>
          <div className="backsid">
            <Image
              src={require("../../component/image/Impetus.png")}
              className="mycompines"
              alt="Image 3"
            />
          </div>
        </div>
        <div  className="mycolum">
        <div className="backsid">
          <Image
            src={require("../../component/image/Intel.png")}
            className="mycompines"
            alt="Image 5"
          />
          </div>
          <div className="backsid">
          <Image
            src={require("../../component/image/Neosoft.png")}
            className="mycompines"
            alt="Image 6"
          />
          </div>
          <div className="backsid">
          <Image
            src={require("../../component/image/Yash.png")}
            className="mycompines"
            alt="Image 7"
          />
          </div>
        </div>
        <div  className="mycolum">
        <div className="backsid">
          <Image
            src={require("../../component/image/capegemini-1.png")}
            className="mycompines"
            alt="Image 5"
          />
          </div>
          <div className="backsid">
          <Image src={require("../../component/image/ey.png")}
           className="mycompines"
          alt="Image 6" />
          </div>
          <div className="backsid">
          <Image
            src={require("../../component/image/Netlink.png")}
            className="mycompines"
            alt="Image 7"
          />
          </div>
        </div>
        <Column  className="mycolum">
        <div className="backsid">
          <Image
            src={require("../../component/image/mphasis.png")}
            className="mycompines"
            alt="Image 9"
          />
          </div>
          <div className="backsid">
          <Image
            src={require("../../component/image/redhat.png")}
            className="mycompines"
            alt="Image 8"
          />
          </div>
          <div className="backsid">
          <Image
            src={require("../../component/image/tcs1.png")}
            className="mycompines"
            alt="Image 4"
          />
          </div>
        </Column> */}
      {/* <Column> */}
      {/* <Image
            src={require("../../component/image/Amazon2.png")}
            alt="Image 10"
          /> */}
      {/* <div className="backsid">
          <Image
            src={require("../../component/image/accenture.png")}
            alt="Image 11"
          />
          </div>
          <div className="backsid">
          <Image
            src={require("../../component/image/Infosys.png")}
            alt="Image 12"
          />
          </div> */}
      {/* </Column> */}
      {/* </Container> */}
    </>
  );
};

export default Compnay;
