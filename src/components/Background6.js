import "./Background6.css";

const Background6 = ({
  className = "",
  prop,
  chooseTheDestination,
  andESIMDataPlan,
  image,
}) => {
  return (
    <div className={`background39 ${className}`}>
      <div className="overlay-wrapper3">
        <div className="overlay7">
          <div className="div5">{prop}</div>
        </div>
      </div>
      <div className="frame-parent52">
        <div className="choose-the-destination-and-esi-container">
          <div className="choose-the-destination-container2">
            <p className="choose-the-destination2">{chooseTheDestination}</p>
            <p className="and-esim-data2">{andESIMDataPlan}</p>
          </div>
        </div>
        <img className="image-icon24" alt="" src={image} />
      </div>
    </div>
  );
};

Background6.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  chooseTheDestination: PropTypes.string,
  andESIMDataPlan: PropTypes.string,
  image: PropTypes.string,
};

export default Background6;
