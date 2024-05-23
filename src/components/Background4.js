import { useMemo } from "react";
import "./Background4.css";

const Background4 = ({ className = "", propHeight, propGap }) => {
  const backgroundStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`background41 ${className}`} style={backgroundStyle}>
      <div className="image-parent11">
        <img className="image-icon39" alt="" src="/image-17@2x.png" />
        <div className="dietrich-c-frame">
          <div className="dietrich-c2">Dietrich C.</div>
        </div>
      </div>
      <img className="container-icon19" alt="" src="/container-7.svg" />
      <div className="frame-parent55" style={frameDiv1Style}>
        <div className="i-have-used-it-in-several-euro-container">
          <div className="i-have-used-container4">
            <span>
              <p className="i-have-used4">I have used it in several</p>
              <p className="european-countries-without2">
                European countries without any
              </p>
              <p className="problem2">problem.</p>
            </span>
          </div>
          <div className="i-have-used-container5">
            <span>
              <p className="i-have-used5">
                I have used it in several European countries
              </p>
              <p className="without-any-problem2">
                without any problem. The Internet was fast
              </p>
              <p className="as-possible-from2">
                as possible from a local providers.
              </p>
            </span>
          </div>
        </div>
        <div className="svg-parent13">
          <img className="svg-icon86" alt="" src="/svg-13.svg" />
          <div className="verified-purchaser17">Verified Purchaser · IOS</div>
        </div>
      </div>
    </div>
  );
};

Background4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propGap: PropTypes.any,
};

export default Background4;
