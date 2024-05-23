import { useMemo } from "react";
import "./MissionContent.css";

const MissionContent = ({
  className = "",
  heading2OurMission,
  ourMissionIsToConnectPeop,
  liveWorkAndExploreTheWorl,
  inspireGlobetrottersEntre,
  technophilesToApplyCuttin,
  forEnhancingTheirExperien,
  propMinWidth,
}) => {
  const missionContentStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`mission-content ${className}`} style={missionContentStyle}>
      <div className="heading-2-our-mission-parent">
        <h1 className="heading-23">{heading2OurMission}</h1>
        <h3 className="our-mission-is-container">
          <p className="our-mission-is">{ourMissionIsToConnectPeop}</p>
          <p className="live-work-and">{liveWorkAndExploreTheWorl}</p>
          <p className="inspire-globetrotters-entrepr">
            {inspireGlobetrottersEntre}
          </p>
          <p className="technophiles-to-apply">{technophilesToApplyCuttin}</p>
          <p className="for-enhancing-their">{forEnhancingTheirExperien}</p>
        </h3>
      </div>
    </div>
  );
};

MissionContent.propTypes = {
  className: PropTypes.string,
  heading2OurMission: PropTypes.string,
  ourMissionIsToConnectPeop: PropTypes.string,
  liveWorkAndExploreTheWorl: PropTypes.string,
  inspireGlobetrottersEntre: PropTypes.string,
  technophilesToApplyCuttin: PropTypes.string,
  forEnhancingTheirExperien: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default MissionContent;
