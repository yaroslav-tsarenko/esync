import LinkButton2 from "./LinkButton2";
import LinkButton1 from "./LinkButton1";
import LinkButton from "./LinkButton";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  onLinkButton8Click,
  onLinkButton42Click,
  onLinkButton52Click,
}) => {
  return (
    <div className={`link-button-parent4 ${className}`}>
      <LinkButton2 onLinkButton8Click={onLinkButtonClick} />
      <div className="link-button-parent5">
        <div className="link-button10" onClick={onLinkButton42Click}>
          <div className="frame-parent50">
            <div className="svg-wrapper11">
              <img
                className="svg-icon44"
                loading="lazy"
                alt=""
                src="/svg-3.svg"
              />
            </div>
            <div className="europe-parent">
              <a
                className="europe"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-18702"
                target="_blank"
              >
                Europe
              </a>
              <a
                className="countries1"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-18702"
                target="_blank"
              >
                31 countries
              </a>
            </div>
          </div>
          <div className="svg-wrapper12">
            <img
              className="svg-icon45"
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
        <div className="link-button11">
          <div className="frame-parent51">
            <div className="container-wrapper4">
              <img
                className="container-icon20"
                loading="lazy"
                alt=""
                src="/container-7.svg"
              />
            </div>
            <div className="germany-parent">
              <div className="germany">Germany</div>
              <div className="from-159gb2">from $1.59/GB</div>
            </div>
          </div>
          <div className="svg-wrapper13">
            <img className="svg-icon46" alt="" src="/svg-2.svg" />
          </div>
        </div>
      </div>
      <div className="link-button-parent6">
        <div className="link-button12">
          <div className="frame-parent52">
            <div className="container-wrapper5">
              <img
                className="container-icon21"
                loading="lazy"
                alt=""
                src="/container-5.svg"
              />
            </div>
            <div className="spain-parent">
              <div className="spain">Spain</div>
              <div className="from-159gb3">from $1.59/GB</div>
            </div>
          </div>
          <div className="svg-wrapper14">
            <img
              className="svg-icon47"
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
        <div className="link-button13">
          <div className="frame-parent53">
            <div className="container-wrapper6">
              <img
                className="container-icon22"
                loading="lazy"
                alt=""
                src="/container-2.svg"
              />
            </div>
            <div className="turkey-parent">
              <div className="turkey">Turkey</div>
              <div className="from-143gb">from $1.43/GB</div>
            </div>
          </div>
          <div className="svg-wrapper15">
            <img className="svg-icon48" alt="" src="/svg-2.svg" />
          </div>
        </div>
      </div>
      <div className="link-button-parent7">
        <LinkButton1 />
        <LinkButton onLinkButton52Click={onLinkButton1Click} />
      </div>
    </div>
  );
};



export default FrameComponent;
