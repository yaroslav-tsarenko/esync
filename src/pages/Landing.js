import FrameComponent9 from "../components/FrameComponent9";
import Background1 from "../components/Background1";
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import "./Landing.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Landing = () => {
  return (
      <>
          <Header/>
          <div className="landing">
              <header className="image-parent">
                  <img className="image-icon" alt="" src="/imagelanding.svg"/>
                  <img className="button-svg" alt="" src="/button--svg.svg"/>
                  <img className="button-svg1" alt="" src="/button--svg-1.svg"/>
              </header>
              <div className="esim-mobile-data-plans-for-tou-parent">
                  <h1 className="esim-mobile-data-container">
                      <p className="esim-mobile-data">eSIM mobile data plans for</p>
                      <p className="tourism-and-business">tourism and business</p>
                  </h1>
                  <div className="frame-wrapper">
                      <div className="background-parent">
                          <button className="background">
                              <b className="b">4.5</b>
                              <div className="svg-wrapper">
                                  <img className="svg-icon" alt="" src="/svg.svg"/>
                              </div>
                          </button>
                          <div className="k-ratings-wrapper">
                              <div className="k-ratings">10K+ ratings</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="frame-parent">
                  <FrameComponent9/>
                  <Background1/>
                  <Section4/>
                  <Section3/>
                  <Section2/>
                  <Section1/>
              </div>
              <Section/>
          </div>
          <Footer/>
      </>
  );
};

export default Landing;
