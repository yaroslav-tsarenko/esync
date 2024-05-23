import { useMemo } from "react";
import "./Link2.css";

const Link2 = ({
  className = "",
  gB,
  days,
  prop,
  gB1,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const gBStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const gB1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`link6 ${className}`}>
      <div className="container17">
        <div className="gb-parent1" style={frameDiv2Style}>
          <b className="gb10" style={gBStyle}>
            {gB}
          </b>
          <div className="days6">{days}</div>
        </div>
        <div className="parent4">
          <b className="b5">{prop}</b>
          <div className="gb11" style={gB1Style}>
            {gB1}
          </div>
        </div>
        <div className="overlayshadow-wrapper1">
          <div className="overlayshadow6" />
        </div>
      </div>
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  gB: PropTypes.string,
  days: PropTypes.string,
  prop: PropTypes.string,
  gB1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Link2;
