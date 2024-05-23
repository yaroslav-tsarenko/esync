import "./Background8.css";

const Background8 = ({ className = "" }) => {
  return (
    <div className={`background37 ${className}`}>
      <div className="please-check-that-your-device-parent">
        <h2 className="please-check-that-container">
          <p className="please-check-that">
            Please check that your device is compatible with
          </p>
          <p className="esim">eSIM:</p>
        </h2>
        <button className="link-button">
          <a
            className="list-of-compatible"
            href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-5959"
            target="_blank"
          >
            List of compatible devices
          </a>
        </button>
      </div>
      <img className="svg-icon84" alt="" src="/svg-12.svg" />
    </div>
  );
};

Background8.propTypes = {
  className: PropTypes.string,
};

export default Background8;
