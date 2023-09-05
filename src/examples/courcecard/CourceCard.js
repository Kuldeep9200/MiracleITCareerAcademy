import React, { useEffect } from 'react';
import "./courcecar.css";
const CourceCard = () => {
  
  const handleScroll = () => {
    const cards = document.querySelectorAll('.cardcc');
    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect();
      if (cardPosition.top < window.innerHeight) {
        card.classList.add('show-card');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 containercc">
      <div className="cardcc animated-card">
          <div className="face face1">
            <div className="contentcc">
              <img
                src={require("../../component/image/tool.png")}
                className="key-feature-icon"
                alt="cource1"
              />
            </div>
          </div>
          <div className="face face2">
            <div className="contentcc">
              <p className="ppcource">Most demanded skills and tools</p>
            </div>
          </div>
        </div>
        <div className="cardcc">
          <div className="face face1">
            <div className="contentcc">
              <img
                src={require("../../component/image/session.png")}
                className="key-feature-icon"
                alt="cource1"
              />
            </div>
          </div>
          <div className="face face2">
            <div className="contentcc">
            <p className="ppcource">
                Highly engaging physical sessions led by subject-matter experts.
              </p>
            </div>
          </div>
        </div>
        <div className="cardcc">
          <div className="face face1">
            <div className="contentcc">
              <img
                src={require("../../component/image/industry.png")}
                className="key-feature-icon"
                alt="cource1"
              />
            </div>
          </div>
          <div className="face face2">
            <div className="contentcc">
            <p className="ppcource">Multiple industry-aligned capstone projects.</p>
            </div>
          </div>
        </div>
        <div className="cardcc">
          <div className="face face1">
            <div className="contentcc">
              <img
                src={require("../../component/image/file.png")}
                className="key-feature-icon"
                alt="cource1"
              />
            </div>
          </div>
          <div className="face face2">
            <div className="contentcc">
            <p className="ppcource">Speed Building Techniques and Mock tests.</p>
            </div>
          </div>
        </div>
        <div className="cardcc">
          <div className="face face1">
            <div className="contentcc">
              <img
                src={require("../../component/image/job.png")}
                className="key-feature-icon"
                alt="cource1"
              />
            </div>
          </div>
          <div className="face face2">
            <div className="contentcc">
              <p className="ppcource">Job + Personality oriented comprehensive programs.</p>
            </div>
          </div>
        </div>
        <div className="cardcc">
          <div className="face face1">
            <div className="contentcc">
              <img
                src={require("../../component/image/tips.png")}
                className="key-feature-icon"
                alt="cource1"
              />
            </div>
          </div>
          <div className="face face2">
            <div className="contentcc">
            <p className="ppcource">
              Tips on the usage of tools & technologies for dynamic
                & responsive web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourceCard;
