import "./RegionGrid.css";

const RegionGrid = ({ className = "" }) => {
  return (
    <div className={`region-grid ${className}`}>
      <div className="region-links">
        <div className="link-button15">
          <div className="overlay-parent3">
            <img className="overlay-icon2" alt="" src="/overlay-10.svg" />
            <div className="container-parent9">
              <div className="container12">
                <div className="central-asia">Central Asia</div>
              </div>
              <div className="countries3">6 countries</div>
            </div>
          </div>
          <div className="central-asia-s-v-gs">
            <img className="svg-icon50" alt="" src="/svg-2.svg" />
          </div>
        </div>
        <div className="link-button16">
          <div className="overlay-parent4">
            <img className="overlay-icon3" alt="" src="/overlay-11@2x.png" />
            <div className="balkans-parent">
              <div className="balkans">Balkans</div>
              <div className="countries4">12 countries</div>
            </div>
          </div>
          <div className="svg-wrapper17">
            <img className="svg-icon51" alt="" src="/svg-2.svg" />
          </div>
        </div>
      </div>
      <div className="link-button17">
        <div className="overlay-parent5">
          <img className="overlay-icon4" alt="" src="/overlay-12.svg" />
          <div className="container-parent10">
            <div className="container13">
              <div className="south-east-asia">South East Asia</div>
            </div>
            <div className="countries5">8 countries</div>
          </div>
        </div>
        <div className="south-east-asia-s-v-g">
          <img className="svg-icon52" alt="" src="/svg-2.svg" />
        </div>
      </div>
    </div>
  );
};


export default RegionGrid;
