import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`feedback-container-wrapper ${className}`}>
      <div className="feedback-container">
        <h2 className="our-users-feedback-container1">
          <p className="our-users-feedback1">
            Our users' feedback about eSIM service from
          </p>
          <p className="globalesync1">GlobaleSync</p>
        </h2>
        <div className="feedback-button">
          <div className="feedback-buttons">
            <img className="button-svg10" alt="" src="/button--svg-2.svg" />
            <img className="button-svg11" alt="" src="/button--svg-3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent5;
