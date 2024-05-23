import Link2 from "../components/Link2";
import Background11 from "../components/Background11";
import Background9 from "../components/Background9";
import Background8 from "../components/Background8";
import Background7 from "../components/Background7";
import Background6 from "../components/Background6";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import FrameComponent3 from "../components/FrameComponent3";
import Container1 from "../components/Container1";
import FrameComponent5 from "../components/FrameComponent5";
import "./CaribbeanPackages.css";

const CaribbeanPackages = () => {
  return (
    <div className="caribbean-packages">
      <main className="httpsyesimappregionssout">
        <button className="button1">
          <img className="svg-icon3" alt="" src="/svg.svg" />
          <div className="back-container">
            <div className="back1">Back</div>
          </div>
        </button>
        <div className="background3">
          <div className="frame-container">
            <div className="esim-south-caribbean-cruise-parent">
              <h1 className="esim-south-caribbean">
                eSIM South Caribbean cruise:
              </h1>
              <div className="best-virtual-sim">
                Best virtual SIM cards for travelers
              </div>
            </div>
            <img className="svg-icon4" alt="" src="/svg-11.svg" />
          </div>
          <div className="link-group">
            <Link2 gB="1 GB" days="30 days" prop="$ 15.40" gB1="$15.40 / GB" />
            <Link2
              gB="3 GB"
              days="30 days"
              prop="$ 31.90"
              gB1="$10.63 / GB"
              propWidth="75px"
              propMinWidth="48px"
              propMinWidth1="69px"
            />
            <Link2
              gB="5 GB"
              days="21 days"
              prop="$ 50.60"
              gB1="$10.12 / GB"
              propWidth="79px"
              propMinWidth="48px"
              propMinWidth1="66px"
            />
            <Link2
              gB="10 GB"
              days="30 days"
              prop="$ 74.80"
              gB1="$7.48 / GB"
              propWidth="unset"
              propMinWidth="59px"
              propMinWidth1="62px"
            />
          </div>
        </div>
        <Background11 />
        <Background9 />
        <div className="background4">
          <div className="heading-24">Technical specs</div>
          <div className="svg-frame">
            <img className="svg-icon5" alt="" src="/svg-10.svg" />
          </div>
        </div>
        <div className="background5">
          <div className="heading-25">About</div>
          <div className="frame-div">
            <img className="svg-icon6" alt="" src="/svg-10.svg" />
          </div>
        </div>
        <Background8 />
        <div className="section3">
          <div className="section-child">
            <div className="frame-parent1">
              <div className="heading-2-how-does-esim-from-container">
                <h2 className="heading-26">
                  How does eSIM from GlobaleSync work?
                </h2>
              </div>
              <div className="button-svg-group">
                <img
                  className="button-svg2"
                  loading="lazy"
                  alt=""
                  src="/button--svg.svg"
                />
                <img className="button-svg3" alt="" src="/button--svg-1.svg" />
              </div>
            </div>
          </div>
          <div className="container2">
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
        <div className="section4">
          <FrameComponent3 />
          <Container1 />
        </div>
        <div className="section5">
          <h2 className="heading-27">
            FAQ about eSIM for South Caribbean cruise
          </h2>
          <FrameComponent5 />
        </div>
        <div className="container3" />
      </main>
    </div>
  );
};

export default CaribbeanPackages;
