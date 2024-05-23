import "./Background7.css";

const Background7 = ({ className = "" }) => {
  return (
    <div className={`background38 ${className}`}>
      <div className="background-inner">
        <div className="frame-parent48">
          <div className="overlay-wrapper2">
            <div className="overlay6">
              <div className="div4">1</div>
            </div>
          </div>
          <div className="frame-parent49">
            <div className="frame-wrapper11">
              <div className="frame-parent50">
                <div className="check-your-frame">
                  <div className="check-your2">{`Check your `}</div>
                </div>
                <a
                  className="device2"
                  href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-5959"
                  target="_blank"
                >
                  device
                </a>
              </div>
            </div>
            <div className="frame-parent51">
              <div className="compatibility-container">
                <a
                  className="compatibility3"
                  href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-5959"
                  target="_blank"
                >
                  compatibility
                </a>
              </div>
              <div className="in-our-list2"> in our list</div>
            </div>
          </div>
        </div>
      </div>
      <img className="image-icon23" alt="" src="/image-1@2x.png" />
    </div>
  );
};

Background7.propTypes = {
  className: PropTypes.string,
};

export default Background7;
