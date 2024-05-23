import { useMemo } from "react";
import "./LinkButton3.css";

const LinkButton3 = ({
  className = "",
  container,
  egypt,
  from319GB,
  propMinWidth,
}) => {
  const egyptStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link-button3 ${className}`}>
      <div className="frame-parent8">
        <div className="container-wrapper">
          <img className="container-icon7" alt="" src={container} />
        </div>
        <div className="egypt-parent">
          <div className="egypt" style={egyptStyle}>
            {egypt}
          </div>
          <div className="from-319gb">{from319GB}</div>
        </div>
      </div>
      <div className="svg-wrapper1">
        <img className="svg-icon11" alt="" src="/svg-2.svg" />
      </div>
    </div>
  );
};



export default LinkButton3;
