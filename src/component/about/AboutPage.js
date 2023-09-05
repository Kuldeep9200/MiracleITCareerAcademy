import "./style.css";
import AboutCard from "../../examples/AboutCard";
import { useEffect } from "react";
const AboutPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginTop: "4%" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img
              src={require("../image/Banner website (1) (1).png")}
              className="d-block w-100 mybanner"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src={require("../image/Banner website3 (1).png")}
              className="d-block w-100 mybanner"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../image/Banner website2 (1) (1).png")}
              className="d-block w-100 mybanner"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../image/Banner website4.png")}
              className="d-block w-100 mybanner"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="row itskills"
        style={{
          marginTop: "12px",
          marginLeft: "10px",
          marginRight: "20px",
          padding: "2%",
        }}
      >
        <div
          className="col-sm-3 mb-3 mb-sm-0 colsm66"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../image/caacac (1).png")}
            style={{ width: "84%" }}
            alt="about1"
          />
        </div>
        <div className="col-sm-9 colsm66">
          <h2 className="hh1">About Miracle IT Career Academy</h2>

          <p className="pp1">
            Miracle IT Career Academy is dedicated to providing industry-ready
            IT education, followed by either a{" "}
            <strong>100% Job Assurance*</strong> following the course completion
            or a <strong>100% Money Back Guarantee*</strong> in the event that a
            job placement is not achieved. We provide an extensive lineup of
            programming courses that range from introductory to advanced. We
            understand how critical it is to foster our students' overall
            development in addition to teaching them how to program. We
            therefore concentrate on enhancing your soft skills, capacity for
            rational thought, personality traits, and confidence in yourself.{" "}
            <br /> <br />
            Our staff of professionals is well-versed in a variety of
            technologies and software development, making them an excellent
            resource for students in need of direction. The method of
            instruction we employ is distinctive and quite successful.
            <br />
            <br />
            <ul>
              <li className="bullt">
                We motivate students to start from scratch while working on
                real-world projects.
              </li>
              <li className="bullt">
                {" "}
                Our staff has all the necessary knowledge to assist you in a
                variety of ways, including project study, development, analysis,
                implementation, execution, deployment, etc.
              </li>
              <li className="bullt">
                {" "}
                We regularly check on your work and offer suggestions to make
                sure the project is carried out successfully.
              </li>
              <li className="bullt">
                {" "}
                We assess your performance and provide inspiration for you to
                keep developing your abilities.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="row"
        style={{ marginTop: "50px", marginLeft: "10px", marginRight: "20px" }}
      >
        <div className="col-sm-9 colsm66">
          <h2 className="hh1">
            About Miracle Information Services (Miracle Infoserv)
          </h2>

          <p className="pp1">
            Miracle Information Services (OPC) Private Limited is a leading
            Edutech/IT services company registered under the companies Act 1956
            and is in the field of Manpower planning, Software development, and
            IT training and placements. In the last decade our organization
            Miracle Infotech has expanded and incorporated as Miracle
            Information services, Miracle IT career academy, Miracle IT skills,
            Miracle Infosoft, and Miracle Foundation.
            <br />
            <br />
            Miracle InfoServ works in different domains like Software
            Development, Training and Education, Human Resource, Third Party Pay
            Roll, and with this expertise, we at Miracle Infoserv train the
            young minds and serve several clients globally. Our motive is to
            keep working with the pace of new age technology. At Miracle
            InfoServ, we work on Need-of-the-hour Technologies i.e. Software
            Development, Programming Language Training (JAVA/PYTHON/PHP/C/C++)
            Cyber Security, Ethical Hacking, Machine Learning, Data Analysis,
            Internet of Things, Block chain, Red Hat etc. <br />
            <br />
            We work with a mission to bridge the gap between the
            Skills-in-demand and the skills imparted by the traditional
            institution, our courses focus to prepare the students in futuristic
            technologies, analytical thinking, strategic planning, and ensuring
            them ready to become the leaders of the future. With our presence in
            Central India, we have impacted more than 15,000 students so far and
            we are planning to reach over million students by the end of 2030.
          </p>
        </div>
        <div
          className="col-sm-3 mb-3 mb-sm-0 colsm66"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../image/MINFo.png")}
            style={{ width: "70%" }}
            alt="about1"
          />
        </div>
      </div>

      <div
        className="row itskills"
        style={{ marginTop: "50px", marginLeft: "10px", marginRight: "20px" }}
      >
        <div
          className="col-sm-3 mb-3 mb-sm-0 colsm66"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../image/itski.png")}
            style={{ width: "67%" }}
            alt="about1"
          />
        </div>
        <div className="col-sm-9 colsm66">
          <h2 className="hh1">About Miracle IT Skills</h2>

          <p className="pp1">
            Coding is the new literacy! Just as writing helps you to organize
            your thoughts and express your ideas, the same is true for coding.
            Coding enables you to craft your own interactive stories and games,
            thus expressing yourself creatively on the computer.Even in the New
            Education Policy 2020 (NEP 2020) government has emphasized on IT
            education at school level. <br />
            <br />
            In our JUNIOR curriculum we have introduced HTML and CSS go hand in
            hand for developing flexible, attractive, and user-friendly
            websites. HTML (Hyper Text Mark-up Language) is used to show content
            on the page whereas CSS is used for presenting the page. <br />
            <br />
            In our SENIOR curriculum, students will develop the skills to
            program in Python language with an understanding of the concepts of
            basic programming in an open source environment. This course will
            enable the students interested in computer science to understand the
            functionality and solve the exercises as per the CBSE Python for
            class 11th and 12th guidelines.
          </p>
        </div>
      </div>
      <div
        className="row  myitskills"
        style={{ marginTop: "50px", marginLeft: "10px", marginRight: "20px" }}
      >
        <div className="col-sm-9 colsm66">
          <h2 className="hh1"> About Miracle IT Foundation</h2>

          <p className="pp1">
            Miracle Group is committed to the communities in which it operates.
            This has led to the creation of the Miracle IT Foundation to support
            the underprivileged sections of society. A not-for-profit initiative
            aimed at fulfilling the social responsibility of Miracle Information
            Services (OPC) Pvt. Ltd., the Miracle IT Foundation creates
            opportunities and strives towards a more equitable society.
            Established in 2021, the Miracle IT Foundation supports programs in
            the areas of education, rural development, skill development, arts
            and culture, and destitute care. Its mission is to work in remote
            regions of several states in India.
            <br />
            <br />
            The Miracle IT Foundation takes pride in working with all sections
            of society, selecting projects with infinite care, and working in
            areas that are traditionally overlooked by society at large. At the
            outset, the Miracle IT Foundation implemented programs in Madhya
            Pradesh and subsequently extended its coverage to Chhattisgarh,
            Maharashtra, and Uttar Pradesh.
          </p>
          <div className="ourits"> AIM: </div>
          <ul>
            <li className="ourits1">
              {" "}
              To make IT education easily accessible{" "}
            </li>
            <li className="ourits1"> To educate the underserved community </li>
            <li className="ourits1">
              {" "}
              To demonstrate the impact of skilled IT professionals{" "}
            </li>
          </ul>
          <div className="ourits" style={{ fontFamily: "cursive" }}>
            {" "}
            "Educating one child results in the betterment of an entire family
            and creates a difference in the upcoming generations"{" "}
          </div>
        </div>
        <div
          className="col-sm-3 mb-3 mb-sm-0 colsm66"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../image/foundation.png")}
            style={{ width: "100%" }}
            alt="about1"
          />
        </div>
      </div>
      <div
        className="row itskills"
        style={{ marginTop: "50px", marginLeft: "10px", marginRight: "20px" }}
      >
        <div
          className="col-sm-3 mb-3 mb-sm-0 colsm66"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../image/minfos.png")}
            style={{ width: "100%" }}
            alt="about1"
          />
        </div>
        <div className="col-sm-9 colsm66">
          <h2 className="hh1">About Miracle Infosoft</h2>

          <p className="pp1">
            Miracle Infosoft combines the power of domain enterprise, and
            digital technologies to reimagine business processes for customers
            and their ecosystem. Its consultative and design-thinking approach
            makes societies more productive by helping customers run businesses.
            As part of the Market leader Technology Solution Miracle Infosoft is
            a team of highly qualified and professional workers.
            <br />
            <br />
            ENGAGEMENT
            <br />
            Happy faces are our biggest assets. This includes our customers, our
            colleagues, and the network we partner with. When customers work
            with us, they allow us to enter their organization and blend
            harmoniously with their culture and people. We engage with them to
            work seamlessly. It's no different when it comes to working with our
            partners.
            <br />
            <br />
            DEPENDABLE
            <br />
            Customers look for support and we at Miracle Infosoft make them feel
            that they can rely on us. It's very important for us to find out how
            we as an organization can win their trust and continue to function
            as a dependable unit.
            <br />
            <br />
            CHALLENGER
            <br />
            Our organization is about scale and quality. We take great care to
            deliver the best to our customers by understanding their needs.
            Focus, agility, and flexibility from our side are always paramount
            as we go the extra mile to drive success for our customers.
            <br />
            <br />
          </p>
        </div>
      </div>

      <div className="containerab">
        <div className="row" style={{ padding: "5%" }}>
          <div className="col-sm-7 mb-3 mb-sm-0 colsm66">
            <h2 className="hh1"> Our Mission</h2>
            <ul className="pp2">
              <li className="pp3">
                Instead of adhering to the conventional teaching approaches,
                concentrate more on real-world issues that would motivate and
                impact students.{" "}
              </li>
              <li className="pp3">
                {" "}
                To provide students the proper instruction necessary for them to
                obtain the position of their choosing.
              </li>
              <li className="pp3">
                {" "}
                Learners should focus on developing their communication,
                presentation, logical thinking, and, of course, excellent coding
                skills in addition to academic knowledge.
              </li>
              <li className="pp3">
                Our goal is to create students "fit to fight" with the
                competition and ready to lead in every way by educating them to
                fulfill the demands of the ever evolving industry.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6"></div>
      </div>
      <div
        className="vision"
        style={{
          border: "4px solid blue",
          borderRadius: "13px",
          padding: "10px",
          margin: "10PX",
        }}
      >
        <h2 className="ourvision" style={{ textAlign: "center" }}>
          Our Vision
        </h2>
        <p
          className=" aboutp"
          style={{ textAlign: "center", fontSize: "25px" }}
        >
          To be acknowledged as innovators in novel and distinctive teaching
          methods. Our goal is to create an IT professional who is prepared for
          the industry and incorporates all the key components that no other
          institute focuses on.
        </p>
      </div>
      <AboutCard />
     
    </>
  );
};

export default AboutPage;
