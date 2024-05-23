import "./LinkButton6.css";

const LinkButton6 = ({ className = "", overlay, northAmerica, countries }) => {
  return (
    <div className={`link-button14 ${className}`}>
      <div className="overlay-parent2">
        <img className="overlay-icon1" alt="" src={overlay} />
        <div className="container-parent8">
          <div className="container11">
            <div className="north-america">{northAmerica}</div>
          </div>
          <div className="countries2">{countries}</div>
        </div>
      </div>
      <div className="svg-wrapper16">
        <img className="svg-icon49" alt="" src="/svg-2.svg" />
      </div>
    </div>
  );
};



export default LinkButton6;
