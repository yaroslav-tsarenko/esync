import "./Background9.css";

const Background9 = ({ className = "" }) => {
  return (
    <div className={`background36 ${className}`}>
      <h3 className="heading-218">Details</h3>
      <div className="frame-parent46">
        <div className="frame-wrapper10">
          <div className="svg-parent11">
            <img className="svg-icon81" alt="" src="/svg-7.svg" />
            <img className="svg-icon82" alt="" src="/svg-8.svg" />
            <img className="svg-icon83" alt="" src="/svg-9.svg" />
          </div>
        </div>
        <div className="frame-parent47">
          <div className="plan-type-parent">
            <div className="plan-type">Plan type:</div>
            <div className="data-only-esim">
              Data only eSIM, does not come with a number
            </div>
          </div>
          <div className="activation-parent">
            <div className="activation">Activation:</div>
            <div className="automatic-activation-after">
              Automatic activation after payment.
            </div>
          </div>
          <div className="top-up-parent">
            <div className="top-up">Top-up:</div>
            <div className="not-available">Not available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Background9.propTypes = {
  className: PropTypes.string,
};

export default Background9;
