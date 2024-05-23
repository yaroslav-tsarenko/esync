import Background from "./Background";
import PropTypes from "prop-types";
import "./Section4.css";

const Section4 = ({ className = "" }) => {
  return (
    <div className={`section3 ${className}`}>
      <div className="section-inner">
        <div className="frame-parent13">
          <div className="heading-2-how-does-esim-from-wrapper">
            <h2 className="heading-25">How does eSIM from GlobaleSync work?</h2>
          </div>
          <div className="button-svg-parent">
            <img className="button-svg6" alt="" src="/button--svg-2.svg" />
            <img className="button-svg7" alt="" src="/button--svg-3.svg" />
          </div>
        </div>
      </div>
      <div className="background-group">
        <div className="background14">
          <div className="background-inner">
            <div className="frame-parent14">
              <div className="overlay-wrapper1">
                <div className="overlay5">
                  <div className="div4">1</div>
                </div>
              </div>
              <div className="frame-parent15">
                <div className="frame-wrapper3">
                  <div className="frame-parent16">
                    <div className="check-your-wrapper">
                      <div className="check-your2">{`Check your `}</div>
                    </div>
                    <a
                      className="device1"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-5959"
                      target="_blank"
                    >
                      device
                    </a>
                  </div>
                </div>
                <div className="frame-parent17">
                  <div className="compatibility-wrapper">
                    <a
                      className="compatibility2"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-5959"
                      target="_blank"
                    >
                      compatibility
                    </a>
                  </div>
                  <div className="in-our-list1"> in our list</div>
                </div>
              </div>
            </div>
          </div>
          <img className="image-icon28" alt="" src="/image-5@2x.png" />
        </div>
        <Background
          prop="2"
          chooseTheDestination="Choose the destination"
          andESIMDataPlan="and eSIM data plan"
          image="/image-6@2x.png"
        />
        <Background
          prop="3"
          chooseTheDestination="Buy eSIM card most"
          andESIMDataPlan="suitable for your needs"
          image="/image-7@2x.png"
        />
      </div>
    </div>
  );
};



export default Section4;
