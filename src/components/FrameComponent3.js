import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  prop,
  heading4SignUpForYesimBus,
  createACorporateAccountAn,
  businessNeeds,
  prop1,
  heading4ESIMDeployment,
  distributeESIMProfilesToY,
  devicesNoMatterWhereTheyA,
  divHeight,
  divGap,
  frameDivWidth,
  frameDivDisplay,
  frameDivMinWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      height: divHeight,
      gap: divGap,
    };
  }, [divHeight, divGap]);

  const heading4Style = useMemo(() => {
    return {
      width: frameDivWidth,
      display: frameDivDisplay,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivWidth, frameDivDisplay, frameDivMinWidth]);

  return (
    <div className={`item-parent3 ${className}`}>
      <div className="item27">
        <div className="background31">
          <div className="div5">{prop}</div>
        </div>
        <div
          className="heading-4-sign-up-for-yesim-parent"
          style={frameDiv2Style}
        >
          <div className="heading-47" style={heading4Style}>
            {heading4SignUpForYesimBus}
          </div>
          <div className="create-a-corporate-container">
            <span>
              <p className="create-a-corporate">{createACorporateAccountAn}</p>
              <p className="business-needs">{businessNeeds}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="item28">
        <div className="background32">
          <div className="div6">{prop1}</div>
        </div>
        <div className="heading-4-esim-deployment-parent">
          <div className="heading-48">{heading4ESIMDeployment}</div>
          <div className="distribute-esim-profiles-container">
            <p className="distribute-esim-profiles">
              {distributeESIMProfilesToY}
            </p>
            <p className="devices-no-matter">{devicesNoMatterWhereTheyA}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
