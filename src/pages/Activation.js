import Background4 from "../components/Background4";
import Background3 from "../components/Background3";
import Background1 from "../components/Background1";
import Background from "../components/Background";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import FrameComponent1 from "../components/FrameComponent1";
import "./Activation.css";

const Activation = () => {
  return (
    <div className="activation">
      <main className="httpsyesimappinternationa">
        <button className="button">
          <img className="svg-icon" alt="" src="/svg1.svg" />
          <div className="back-wrapper">
            <div className="back">Back</div>
          </div>
        </button>
        <Background4 />
        <Background3 />
        <div className="background">
          <h3 className="heading-22">Details</h3>
          <div className="frame-group">
            <div className="frame-container">
              <div className="svg-wrapper">
                <img className="svg-icon1" alt="" src="/svg-8.svg" />
              </div>
              <div className="plan-type-parent">
                <div className="plan-type">Plan type:</div>
                <div className="data-only-esim">
                  Data only eSIM, does not come with a number
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="svg-container">
                <img className="svg-icon2" alt="" src="/svg-9.svg" />
              </div>
              <div className="payment-parent">
                <div className="payment">Payment</div>
                <div className="the-payment-for">
                  The payment for the number is made using our internal currency
                  – Ycoins. $1.10 = 100 Ycoins
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section-inner">
            <div className="frame-parent1">
              <div className="heading-2-how-does-esim-from-wrapper">
                <h2 className="heading-23">
                  How does eSIM from GlobaleSync work?
                </h2>
              </div>
              <div className="button-svg-parent">
                <img
                  className="button-svg4"
                  loading="lazy"
                  alt=""
                  src="/button--svg-2.svg"
                />
                <img className="button-svg5" alt="" src="/button--svg-3.svg" />
              </div>
            </div>
          </div>
          <div className="container1">
            <Background1
              propAlignSelf="unset"
              propFlexWrap="wrap"
              propRowGap="20px"
              propMinWidth="63px"
              propFlexWrap1="wrap"
              propRowGap1="20px"
              propFlex="unset"
              propMaxHeight="unset"
              propHeight="260px"
              backgroundDebugCommit="unset"
            />
            <Background
              prop="2"
              chooseTheDestination="Choose the destination"
              andESIMDataPlan="and eSIM data plan"
              image="/image-5@2x.png"
              propAlignSelf="unset"
              propHeight="372px"
              backgroundDebugCommit="unset"
            />
            <Background
              prop="3"
              chooseTheDestination="Buy eSIM card most"
              andESIMDataPlan="suitable for your needs"
              image="/image-6@2x.png"
              propAlignSelf="unset"
              propHeight="372px"
              backgroundDebugCommit="unset"
            />
          </div>
        </div>
        <Section2 />
        <Section1 />
        <Section
          ourUsersFeedbackAboutESIM="Our users' feedback about International eSIM"
          globaleSync="from GlobaleSync"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propRowGap="20px"
          propHeight="unset"
          propFlex="unset"
          propMinWidth="47px"
          propHeight1="unset"
          propFlex1="unset"
          propAlignSelf="unset"
          propFlex2="unset"
          propHeight2="57.5px"
        />
        <div className="section3">
          <h2 className="heading-24">FAQ about International eSIM data plan</h2>
          <FrameComponent1 />
        </div>
        <div className="container2" />
      </main>
    </div>
  );
};

export default Activation;
