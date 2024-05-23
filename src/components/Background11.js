import "./Background11.css";

const Background11 = ({ className = "" }) => {
  return (
    <div className={`background49 ${className}`}>
      <h3 className="heading-221">Countries and operators</h3>
      <div className="frame-parent82">
        <div className="container-parent7">
          <img
            className="container-icon25"
            loading="lazy"
            alt=""
            src="/container1@2x.png"
          />
          <div className="aruba-wrapper">
            <div className="aruba">Aruba</div>
          </div>
        </div>
        <div className="frame-wrapper16">
          <div className="digicell-aruba-parent">
            <div className="digicell-aruba">Digicell Aruba</div>
            <div className="svg-wrapper9">
              <img className="svg-icon116" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent83">
        <div className="frame-parent84">
          <div className="container-parent8">
            <img className="container-icon26" alt="" src="/container-11.svg" />
            <div className="barbados-wrapper">
              <div className="barbados">Barbados</div>
            </div>
          </div>
          <div className="container-parent9">
            <img className="container-icon27" alt="" src="/container-21.svg" />
            <div className="martinique-wrapper">
              <div className="martinique">Martinique</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper17">
          <div className="digicel-parent">
            <div className="digicel">Digicel</div>
            <div className="svg-wrapper10">
              <img className="svg-icon117" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <button className="button6">
        <div className="all-countries1">All countries</div>
      </button>
    </div>
  );
};

Background11.propTypes = {
  className: PropTypes.string,
};

export default Background11;
