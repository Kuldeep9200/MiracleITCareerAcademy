import {useEffect} from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import imge1 from "../image/hire1.png";
import imge2 from "../image/hire2.png";
import imge3 from "../image/hire3.png";
import img4 from "../image/hire4.png";
import "./hire.css";
import { NavLink } from "react-router-dom";
const Hire = () => {
  const handleCardHover = (event) => {
    event.currentTarget.classList.toggle("card-hover");
  };
  const cardData = [
    {
      image: imge3,
      title: "Job Ready Candidate",
      description:
        "Our intense programs are taught by industry experts & candidates are job ready as they work on relative project ",
    },
    {
      image: imge2,
      title: "Diverse Talent Pool",
      description:
        "Pick the right talent based on skills and experience and align with the project you are hiring for",
    },
    {
      image: imge1,
      title: "Dedicated Support",
      description:
        "Our relationship manager are trained to understand your needs and you will help you in the hiring process ",
    },
    {
      image: img4,
      title: "Zero Hiring Cost",
      description:
        "Hire the best job ready talent diretly from Miracle at Zero cost to your organization ",
    },
    // Add more card data as needed
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blogcontcource">
        <div className="row">
          <div
            className="col-sm-6 mb-3 mb-sm-0 bloghead colsm66"
            style={{ padding: "5%" }}
          >
            <h1
              className="animated-paragraph myparia"
              style={{
                color: "white",
                fontFamily: "initial",
                fontWeight: "800",
                fontSize: "2.3rem",
              }}
            >
              {" "}
              Best Talent: Zero Cost, Easy Hiring
            </h1>
            <p className="program11 animated-paragraph">
              {" "}
              Miracle IT Academy is one of stop soluation for your company to
              hire job ready industry traned Talent. Hire the best condidate for
              IT infrastructure, Python Full Stack Developement, Java Full Stack
              Developement, React Developers, Front End Developers, Backend
              Developers, Cyber Security, Ethical Hacking, System Administator
              Linux Administator and many more...
            </p>
          </div>
          <div
            className="col-sm-6 colsm66"
            style={{ textAlign: "center", padding: "2%" }}
          >
            <img
                src={require("../image/hirefrom.png")}
              style={{ width: "75%" }}
              className="blogs1"
              alt="blogimg"
            />
          </div>
        </div>
      </div>

      <div className="containtercompany">
        <div className="containtercompany1">
          <div className="containtercompany2">
            {" "}
            <h1 className="placedhire">
              2 States, 15 District, Hunderds of Aspirants
            </h1>
          </div>
          <div className="containtercompany2">
            <h1 className="placedhire"> 250+ Hiring Partners Across The Globe</h1>
          </div>
          <div className="containtercompany2">
            {" "}
            <h1 className="placedhire">100+ Core Technologies & Technical Skills</h1>
          </div>
        </div>
      </div>
      <div
        className="hire3a text-center"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <NavLink to="https://forms.gle/urcqnTAjvbScriXU9">
          <button
            type="button"
            className="btn btn-primary"
            style={{ fontSize: "20px" }}
          >
            Start Hiring
          </button>
        </NavLink>
      </div>
      <Grid container spacing={2} style={{ width: "90%", margin: "auto" }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              className="hhcard"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHover}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 229,
                  height: 160,
                  objectFit: "cover",
                  alignSelf: "center",
                  mt: 2,
                }}
                image={card.image}
                className="ppcard"
                alt={card.title}
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <footer
        className="text-center text-white"
        style={{

          backgroundColor: "blue",
          margin: "auto",
          width:"80%",
          marginTop:"50px",
          borderRadius: "18px",
        }}
      >
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "#090971",
        borderRadius:"13px",marginBottom:"20px"
        }}
        >
          <NavLink to="https://forms.gle/urcqnTAjvbScriXU9">
            <button
              type="button"
              className="btn btn-primary"
              style={{ fontSize: "16px" }}
            >
              Start Hiring
            </button>
          </NavLink>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Hire;
