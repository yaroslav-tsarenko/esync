import "./LinkButton.css";

const LinkButton = ({ className = "", onLinkButton52Click }) => {
  return (
    <div className={`link-button9 ${className}`} onClick={onLinkButton52Click}>
      <div className="frame-parent49">
        <div className="container-wrapper3">
          <img
            className="container-icon19"
            loading="lazy"
            alt=""
            src="/container.svg"
          />
        </div>
        <div className="container-parent7">
          <div className="container10">
            <a
              className="united-states-usa1"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-14066"
              target="_blank"
            >
              United States (USA)
            </a>
          </div>
          <a
            className="from-159gb1"
            href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-14066"
            target="_blank"
          >
            from $1.59/GB
          </a>
        </div>
      </div>
      <div className="svg-wrapper10">
        <img className="svg-icon43" alt="" src="/svg-2.svg" />
      </div>
    </div>
  );
};



export default LinkButton;
