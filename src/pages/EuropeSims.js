import FrameComponent4 from "../components/FrameComponent4";
import Link1 from "../components/Link1";
import Link from "../components/Link";
import Background10 from "../components/Background10";
import Background9 from "../components/Background9";
import Background8 from "../components/Background8";
import Background7 from "../components/Background7";
import Background6 from "../components/Background6";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import FrameComponent3 from "../components/FrameComponent3";
import Container from "../components/Container";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Background from "../components/Background";
import "./EuropeSims.css";

const EuropeSims = () => {
  return (
    <div className="europe-sims">
      <main className="httpsyesimappregionseuro">
        <button className="button">
          <img className="svg-icon" alt="" src="/svg.svg" />
          <div className="back-wrapper">
            <div className="back">Back</div>
          </div>
        </button>
        <div className="background">
          <FrameComponent4 eSIMEurope="eSIM Europe:" sVG="/svg-1.svg" />
          <div className="link-parent">
            <Link1 prop="$ 31.90" />
            <Link days="15 days" prop="$ 53.90" />
            <Link
              days="30 days"
              prop="$ 82.50"
              propMinWidth="81px"
              propDebugCommit="unset"
              propMinWidth1="79px"
              propDebugCommit1="unset"
              propMinWidth2="164px"
            />
            <Link
              days="60 days"
              prop="$ 137.50"
              propMinWidth="81px"
              propDebugCommit="unset"
              propMinWidth1="85px"
              propDebugCommit1="unset"
              propMinWidth2="160px"
            />
            <Link
              days="90 days"
              prop="$ 192.50"
              propMinWidth="81px"
              propDebugCommit="unset"
              propMinWidth1="89px"
              propDebugCommit1="unset"
              propMinWidth2="158px"
            />
          </div>
        </div>
        <Background10 />
        <Background9 />
        <div className="background1">
          <div className="heading-2">Technical specs</div>
          <div className="svg-wrapper">
            <img className="svg-icon1" alt="" src="/svg-10.svg" />
          </div>
        </div>
        <div className="background2">
          <div className="heading-21">About</div>
          <div className="svg-container">
            <img className="svg-icon2" alt="" src="/svg-10.svg" />
          </div>
        </div>
        <Background8 />
        <div className="section">
          <div className="section-inner">
            <div className="frame-group">
              <div className="heading-2-how-does-esim-from-wrapper">
                <h2 className="heading-22">
                  How does eSIM from GlobaleSync work?
                </h2>
              </div>
              <div className="button-svg-parent">
                <img className="button-svg" alt="" src="/button--svg.svg" />
                <img className="button-svg1" alt="" src="/button--svg-1.svg" />
              </div>
            </div>
          </div>
          <div className="container">
            <Background7 />
            <Background6
              prop="2"
              chooseTheDestination="Choose the destination"
              andESIMDataPlan="and eSIM data plan"
              image="/image-2@2x.png"
            />
            <Background6
              prop="3"
              chooseTheDestination="Buy eSIM card most"
              andESIMDataPlan="suitable for your needs"
              image="/image-3@2x.png"
            />
          </div>
        </div>
        <Section1 />
        <Section />
        <div className="section1">
          <FrameComponent3 />
          <Container />
        </div>
        <div className="section2">
          <div className="heading-2-faq-about-esim-for-wrapper">
            <h2 className="heading-23">FAQ about eSIM for Europe</h2>
          </div>
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
        <Background />
        <div className="container1" />
      </main>
    </div>
  );
};

export default EuropeSims;
