import "./Background10.css";

const Background10 = ({ className = "" }) => {
  return (
    <div className={`background35 ${className}`}>
      <h3 className="heading-217">Countries and operators</h3>
      <div className="frame-parent41">
        <div className="container-parent2">
          <img
            className="container-icon15"
            loading="lazy"
            alt=""
            src="/container.svg"
          />
          <div className="austria-wrapper">
            <div className="austria">Austria</div>
          </div>
        </div>
        <div className="frame-wrapper5">
          <div className="a1-parent">
            <div className="a1">A1</div>
            <div className="svg-wrapper5">
              <img className="svg-icon76" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent42">
        <div className="frame-wrapper6">
          <div className="container-parent3">
            <img className="container-icon16" alt="" src="/container-1.svg" />
            <div className="belgium-wrapper">
              <div className="belgium">Belgium</div>
            </div>
          </div>
        </div>
        <div className="frame-parent43">
          <div className="orange-parent">
            <div className="orange">ORANGE</div>
            <div className="base">BASE</div>
          </div>
          <div className="frame-wrapper7">
            <div className="svg-parent9">
              <img className="svg-icon77" alt="" src="/svg-2.svg" />
              <img className="svg-icon78" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent44">
        <div className="frame-wrapper8">
          <div className="container-parent4">
            <img className="container-icon17" alt="" src="/container-2.svg" />
            <div className="bulgaria-wrapper">
              <div className="bulgaria">Bulgaria</div>
            </div>
          </div>
        </div>
        <div className="frame-parent45">
          <div className="telenor-parent">
            <div className="telenor">Telenor</div>
            <div className="vivacom">Vivacom</div>
          </div>
          <div className="frame-wrapper9">
            <div className="svg-parent10">
              <img className="svg-icon79" alt="" src="/svg-2.svg" />
              <img className="svg-icon80" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <button className="button5">
        <div className="all-countries">All countries</div>
      </button>
    </div>
  );
};

Background10.propTypes = {
  className: PropTypes.string,
};

export default Background10;
