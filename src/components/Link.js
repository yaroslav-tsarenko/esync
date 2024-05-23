import { useMemo } from "react";
import "./Link.css";

const Link = ({
  className = "",
  gB,
  days,
  prop,
  gB1,
  propWidth,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const gBStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link1 ${className}`}>
      <div className="container2">
        <div className="gb-parent" style={frameDivStyle}>
          <b className="gb2" style={gBStyle}>
            {gB}
          </b>
          <div className="days1">{days}</div>
        </div>
        <div className="parent">
          <b className="b">{prop}</b>
          <div className="gb3">{gB1}</div>
        </div>
        <div className="overlayshadow-wrapper">
          <div className="overlayshadow" />
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  gB: PropTypes.string,
  days: PropTypes.string,
  prop: PropTypes.string,
  gB1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Link;
