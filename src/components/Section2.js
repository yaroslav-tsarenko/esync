import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <div className={`section5 ${className}`}>
      <h2 className="heading-27">Our partners</h2>
      <div className="we-are-trusted-by-leading-conn-parent">
        <div className="we-are-trusted">
          We are trusted by leading connectivity, media and technology brands
          around the world
        </div>
        <div className="item-parent2">
          <select className="item20">
            <option value="option_1">Option 1</option>
          </select>
          <div className="item21">
            <img className="image-icon36" alt="" src="/image-16@2x.png" />
          </div>
          <div className="item22">
            <img className="image-icon37" alt="" src="/image-17@2x.png" />
          </div>
          <div className="item23">
            <img className="image-icon38" alt="" src="/image-18@2x.png" />
          </div>
          <div className="item24">
            <img className="image-icon39" alt="" src="/image-19@2x.png" />
          </div>
          <div className="item25">
            <img className="image-icon40" alt="" src="/image-20@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Section2;
