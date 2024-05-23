import "./Background.css";

const Background = ({
  className = "",
  prop,
  chooseTheDestination,
  andESIMDataPlan,
  image,
}) => {
  return (
    <div className={`background13 ${className}`}>
      <div className="overlay-frame">
        <div className="overlay4">
          <div className="div3">{prop}</div>
        </div>
      </div>
      <div className="frame-parent12">
        <div className="choose-the-destination-and-esi-wrapper">
          <div className="choose-the-destination-container1">
            <p className="choose-the-destination1">{chooseTheDestination}</p>
            <p className="and-esim-data1">{andESIMDataPlan}</p>
          </div>
        </div>
        <img className="image-icon27" alt="" src={image} />
      </div>
    </div>
  );
};


export default Background;
