import "./Background3.css";

const Background3 = ({
  className = "",
  chooseTheDestination,
  andESIMDataPlan,
  image,
  prop,
}) => {
  return (
    <div className={`background34 ${className}`}>
      <div className="overlay-wrapper2">
        <div className="overlay11">
          <div className="div7">{prop}</div>
        </div>
      </div>
      <div className="plan-parent">
        <div className="plan">
          <div className="choose-the-destination-container2">
            <p className="choose-the-destination2">{chooseTheDestination}</p>
            <p className="and-esim-data2">{andESIMDataPlan}</p>
          </div>
        </div>
        <img className="image-icon55" alt="" src={image} />
      </div>
    </div>
  );
};



export default Background3;
