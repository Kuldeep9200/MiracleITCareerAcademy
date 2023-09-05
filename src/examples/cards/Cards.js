import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import { BsFillStarFill } from "react-icons/bs";
import img1 from "../../component/image/courses1.webp";
import img2 from "../../component/image/courses2.webp";
import img3 from "../../component/image/courses3.webp";
import img4 from "../../component/image/courses4.webp";
import img5 from "../../component/image/courses5.webp";
import img6 from "../../component/image/courses6.webp";
import img7 from "../../component/image/courses7.webp";
// import img8 from "../../component/image/courses8.webp";
import img9 from "../../component/image/13.png";
import img10 from "../../component/image/14.png";
import img11 from "../../component/image/5111.png";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";
import { NavLink } from "react-router-dom";
const Cards = () => {
  const cards = [
    {
      title: "Full Stack MERN ",
      imageUrl: img1,
      link: "/maincource3",
    },
    {
      title: " Full Stack MEAN ",
      imageUrl: img2,
      link: "/maincource4",
    },
    {
      title: "Full Stack Java",
      imageUrl: img3,
      link: "maincource5",
    },
    {
      title: "Full Stack Python",
      imageUrl: img4,
      link: "maincource6",
    },
    {
      title: "Data Anlytics",
      imageUrl: img5,
      link: "maincource9",
    },
    {
      title: "Frontend Development",
      imageUrl: img6,
      link: "maincource8",
    },
    {
      title: "Backend Development",
      imageUrl: img7,
      link: "maincource7",
    },
    // {
    //   title: "Mobile App Development",
    //   imageUrl: img8,
    // },
    {
      title: "PGDSE",
      imageUrl: img9,
      link: "maincource",
    },
    {
      title: "PGDFSE",
      imageUrl: img10,
      link: "maincource1",
    },
    {
      title: "PGDIE",
      imageUrl: img11,
      link: "maincource2",
    },
  ];
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider-container" style={{ margin: "40px" }}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="col-sm-12" key={index}>
            <div
              className="card card11 custom-card  "
              style={{ cursor: "pointer" }}
            >
              <NavLink to={card.link} className="card-link">
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  style={{ width: "100%", borderRadius: "40px" }}
                  alt={card.title}
                />
              </NavLink>
              <div className="card-body">
                <h4
                  style={{
                    textAlign: "center",
                    color: "orangered",
                    fontFamily: "initial",
                    justifyContent: "center",
                  }}
                >
                  {card.title}
                </h4>
                {/* <ul
                  className="reating-list"
                  style={{
                    display: "flex",
                    listStyle: "none",
                    width: "85%",
                    justifyContent: "center",
                    // marginLeft: "21%",
                  }}
                >
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                </ul> */}
                {/* <hr /> */}
                {/* <div className="card-footer courses-icons"> */}
                {/* <p className="text-muted">
                    {" "}
                    <img
                      src={require("../../component/image/document1.png")}
                      style={{ marginRight: "4px" }}
                      alt="document"
                    />
                    20 lessons
                  </p> */}
                {/* <p className="text-muted">
                    {" "}
                    <img
                      src={require("../../component/image/clock.png")}
                      style={{ marginRight: "4px" }}
                      alt="document"
                    />
                    6 months
                  </p> */}
                {/* <p className="text-muted">
                    {" "}
                    <img
                      src={require("../../component/image/bar-chart.png")}
                      style={{ marginRight: "4px" }}
                      alt="document"
                    />
                    All label
                  </p> */}
                {/* </div> */}
              </div>
            </div>
          </div>

          // <div className="card1" style={{textAlign:"center"}} key={index}>
          //   <img src={card.imageUrl} style={{width:"100%",borderRadius:"13px"}} alt={card.title} />
          //   <h3 style={{textAlign:"center",color:"red",fontFamily:"initial"}}>{card.title}</h3>
          // </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
