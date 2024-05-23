import { useMemo } from "react";
import "./Background5.css";

const Background5 = ({ className = "", propGap }) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`background40 ${className}`}>
      <div className="frame-parent53">
        <button className="frame-button">
          <img className="image-icon38" alt="" src="/image-17@2x.png" />
        </button>
        <div className="mohammed-h2">
          <span className="mohammed-h-txt-container2">
            <p className="mohammed2">Mohammed</p>
            <p className="h2">H.</p>
          </span>
        </div>
        <img className="container-icon18" alt="" src="/container-5.svg" />
      </div>
      <div className="frame-parent54" style={frameDivStyle}>
        <div className="top-app-for-the-international-container">
          <div className="top-app-for-container6">
            <span className="top-app-for-container7">
              <p className="top-app-for4">Top app for the international</p>
              <p className="traveling2">traveling!</p>
            </span>
          </div>
          <div className="top-app-for-container8">
            <p className="top-app-for5">
              Top app for the international traveling! The
            </p>
            <p className="coverege-and-speed2">
              coverege and speed of the internet are
            </p>
            <p className="great-i-have2">
              great. I have tested it already in 6 countries
            </p>
            <p className="and-have-no2">
              and have no issues at all. Highly recommend.
            </p>
          </div>
        </div>
        <div className="svg-parent12">
          <img className="svg-icon85" alt="" src="/svg-13.svg" />
          <div className="verified-purchaser16">Verified Purchaser · IOS</div>
        </div>
      </div>
    </div>
  );
};

Background5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default Background5;
