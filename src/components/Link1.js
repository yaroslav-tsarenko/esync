import { useMemo } from "react";
import "./Link1.css";

const Link1 = ({ className = "", prop, propMinWidth }) => {
  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link4 ${className}`}>
      <div className="container14">
        <div className="days-parent">
          <h3 className="days4">7 days</h3>
          <div className="gb8">∞ GB</div>
        </div>
        <div className="container-inner">
          <div className="parent2">
            <b className="b3" style={bStyle}>
              {prop}
            </b>
            <div className="overlayshadow4" />
          </div>
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Link1;
