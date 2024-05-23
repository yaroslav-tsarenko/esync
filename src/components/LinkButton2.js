import "./LinkButton2.css";

const LinkButton2 = ({ className = "", onLinkButton8Click }) => {
  return (
    <div className={`link-button7 ${className}`} onClick={onLinkButton8Click}>
      <div className="image-wrapper3">
        <img
          className="image-icon52"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
      <div className="international-esim-group">
        <a
          className="international-esim1"
          href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-11641"
          target="_blank"
        >
          International eSIM
        </a>
        <a
          className="unlimited-data-pay1"
          href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-11641"
          target="_blank"
        >
          Unlimited data. Pay as you go
        </a>
      </div>
      <div className="svg-wrapper8">
        <img className="svg-icon41" alt="" src="/svg-2.svg" />
      </div>
    </div>
  );
};



export default LinkButton2;
