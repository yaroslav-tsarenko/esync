import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Background13.css";

const Background13 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkButtonClick = useCallback(() => {
    navigate("/httpsyesimappcountryalbania-13052024-143636-eest");
  }, [navigate]);

  return (
    <div className={`background53 ${className}`}>
      <div className="heading-2-countries-and-oper-wrapper">
        <h3 className="heading-222">Countries and operators</h3>
      </div>
      <div className="countries-list">
        <div className="link-button1" onClick={onLinkButtonClick}>
          <div className="country-item">
            <img
              className="container-icon31"
              loading="lazy"
              alt=""
              src="/container2.svg"
            />
            <div className="albania-wrapper">
              <a
                className="albania1"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-26187"
                target="_blank"
              >
                Albania
              </a>
            </div>
          </div>
          <div className="operators2">
            <div className="operator-item">
              <div className="vodafone2">Vodafone</div>
              <div className="svg-wrapper13">
                <img className="svg-icon143" alt="" src="/svg-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="countries-list-container">
          <div className="country-list-item">
            <div className="country-item-container">
              <div className="country-name-container">
                <img
                  className="container-icon32"
                  alt=""
                  src="/container-12.svg"
                />
                <img
                  className="container-icon33"
                  alt=""
                  src="/container-22.svg"
                />
              </div>
              <div className="country-names-wrapper">
                <div className="country-names">
                  <div className="algeria">Algeria</div>
                  <div className="american-virgin-islands">
                    American Virgin Islands
                  </div>
                </div>
              </div>
            </div>
            <div className="operator-container">
              <div className="operator-item-container">
                <div className="oreedowataniya-nedjma">
                  Oreedo/Wataniya / Nedjma
                </div>
                <div className="svg-wrapper14">
                  <img className="svg-icon144" alt="" src="/svg-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-all-countries">
        <button className="button7">
          <div className="all-countries2">All countries</div>
        </button>
      </div>
    </div>
  );
};

Background13.propTypes = {
  className: PropTypes.string,
};

export default Background13;
