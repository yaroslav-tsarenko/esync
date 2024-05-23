import { useMemo } from "react";
import "./Item.css";

const Item = ({
  className = "",
  image,
  heading4GlobalNetworkReli,
  experienceDependable,
  connectivityWithGlobaleSy,
  globalNetworkStayConnecte,
  keyBusinessDestinations,
  ensuringYourTeamIsAlways,
  reachable,
  propGap,
  propHeight,
  propHeight1,
  propWidth,
}) => {
  const itemStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  return (
    <div className={`item26 ${className}`} style={itemStyle}>
      <div className="item-child" style={frameDivStyle}>
        <div
          className="heading-4-global-network-rel-parent"
          style={frameDiv1Style}
        >
          <div className="heading-46">{heading4GlobalNetworkReli}</div>
          <div className="experience-dependable-connecti-container">
            <p className="experience-dependable">{experienceDependable}</p>
            <p className="connectivity-with-globalesync">
              {connectivityWithGlobaleSy}
            </p>
            <p className="global-network-stay">{globalNetworkStayConnecte}</p>
            <p className="key-business-destinations">
              {keyBusinessDestinations}
            </p>
            <p className="ensuring-your-team">{ensuringYourTeamIsAlways}</p>
            <p className="reachable">{reachable}</p>
          </div>
        </div>
      </div>
      <img className="image-icon53" loading="lazy" alt="" src={image} />
    </div>
  );
};



export default Item;
