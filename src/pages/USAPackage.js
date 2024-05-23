import Link from "../components/Link";
import Container1 from "../components/Container1";
import Section from "../components/Section";
import Container from "../components/Container";
import FaqContainer from "../components/FaqContainer";
import Background from "../components/Background";
import "./USAPackage.css";

const USAPackage = () => {
  return (
    <div className="usa-package">
      <main className="httpsyesimappcountryunit">
        <button className="button">
          <img className="svg-icon" alt="" src="/svg.svg" />
          <div className="back-container">
            <div className="back">Back</div>
          </div>
        </button>
        <div className="container">
          <img
            className="image-icon"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className="background">
            <div className="sim-wrapper">
              <div className="sim-content">
                <div className="sim-header">
                  <h1 className="esim-united-states">
                    eSIM United States (USA):
                  </h1>
                  <div className="best-virtual-sim">
                    Best virtual SIM cards for travelers
                  </div>
                </div>
                <div className="sim-buttons">
                  <div className="button1">
                    <div className="unlimited-content">
                      <div className="unlimited">Unlimited</div>
                    </div>
                    <img className="image-icon1" alt="" src="/image-1@2x.png" />
                  </div>
                  <button className="button2">
                    <div className="standard">Standard</div>
                  </button>
                </div>
              </div>
              <img
                className="container-icon"
                loading="lazy"
                alt=""
                src="/container.svg"
              />
            </div>
            <div className="data-plans">
              <div className="link">
                <div className="background1">
                  <div className="plan-values">
                    <a
                      className="gb"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-28454"
                      target="_blank"
                    >
                      3 GB
                    </a>
                    <a
                      className="days"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-28454"
                      target="_blank"
                    >
                      7 days
                    </a>
                  </div>
                  <div className="plan-units">
                    <a
                      className="empty"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-28454"
                      target="_blank"
                    >
                      $ 13.20
                    </a>
                    <a
                      className="gb1"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-28454"
                      target="_blank"
                    >
                      $4.40 / GB
                    </a>
                  </div>
                  <div className="shadows">
                    <div className="background2">
                      <div className="backgroundshadow" />
                    </div>
                  </div>
                </div>
              </div>
              <Link gB="5 GB" days="15 days" prop="$ 16.50" gB1="$3.30 / GB" />
              <Link
                gB="10 GB"
                days="30 days"
                prop="$ 25.30"
                gB1="$2.53 / GB"
                propWidth="unset"
                propMinWidth="59px"
              />
              <Link
                gB="20 GB"
                days="30 days"
                prop="$ 31.90"
                gB1="$1.59 / GB"
                propWidth="unset"
                propMinWidth="61px"
              />
            </div>
          </div>
        </div>
        <div className="background3">
          <h3 className="heading-2">Countries and operators</h3>
          <div className="country-list">
            <div className="country-item">
              <div className="country-content">
                <img
                  className="container-icon1"
                  alt=""
                  src="/container-1.svg"
                />
                <div className="country-name-container">
                  <div className="united-states-usa">United States (USA)</div>
                </div>
              </div>
            </div>
            <div className="operators-container">
              <div className="operator-names">
                <div className="t-mobile">T-Mobile</div>
                <div className="verizonusa">VerizonUSA</div>
              </div>
              <div className="logos">
                <div className="logo-items">
                  <img className="svg-icon1" alt="" src="/svg-1.svg" />
                  <img className="svg-icon2" alt="" src="/svg-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background4">
          <h3 className="heading-21">Details</h3>
          <div className="details-list">
            <div className="detail-items">
              <div className="detail-icons">
                <img className="svg-icon3" alt="" src="/svg-3.svg" />
                <img className="svg-icon4" alt="" src="/svg-4.svg" />
                <img className="svg-icon5" alt="" src="/svg-5.svg" />
              </div>
            </div>
            <div className="plan-info">
              <div className="info-items">
                <div className="plan-type">Plan type:</div>
                <div className="data-only-esim">
                  Data only eSIM, does not come with a number
                </div>
              </div>
              <div className="info-items1">
                <div className="activation">Activation:</div>
                <div className="automatic-activation-after">
                  Automatic activation after payment.
                </div>
              </div>
              <div className="info-items2">
                <div className="top-up">Top-up:</div>
                <div className="not-available">Not available</div>
              </div>
            </div>
          </div>
        </div>
        <div className="background5">
          <div className="heading-22">Technical specs</div>
          <div className="svg-wrapper">
            <img className="svg-icon6" alt="" src="/svg-6.svg" />
          </div>
        </div>
        <div className="background6">
          <div className="heading-23">About</div>
          <div className="svg-container">
            <img className="svg-icon7" alt="" src="/svg-6.svg" />
          </div>
        </div>
        <div className="background7">
          <div className="compatibility-info">
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
          <img className="svg-icon8" alt="" src="/svg-8.svg" />
        </div>
        <div className="section">
          <div className="how-to-wrapper">
            <div className="how-to-content">
              <div className="work">
                <h2 className="heading-24">
                  How does eSIM from GlobaleSync work?
                </h2>
              </div>
              <div className="esim-steps">
                <img className="button-svg" alt="" src="/button--svg.svg" />
                <img className="button-svg1" alt="" src="/button--svg-1.svg" />
              </div>
            </div>
          </div>
          <Container1 />
        </div>
        <div className="section1">
          <h2 className="heading-25">Supported networks</h2>
          <div className="our-industry-leading-carriers-parent">
            <div className="our-industry-leading-carriers">
              Our industry-leading carriers ensure quality and deliver seamless
              connectivity anywhere, anytime
            </div>
            <div className="operators">
              <div className="item">
                <img className="image-icon2" alt="" src="/image-5@2x.png" />
              </div>
              <div className="item1">
                <img className="image-icon3" alt="" src="/image-6@2x.png" />
              </div>
              <div className="item2">
                <img className="image-icon4" alt="" src="/image-7@2x.png" />
              </div>
              <div className="item3">
                <img className="image-icon5" alt="" src="/image-8@2x.png" />
              </div>
              <div className="item4">
                <img className="image-icon6" alt="" src="/image-9@2x.png" />
              </div>
              <div className="item5">
                <img className="image-icon7" alt="" src="/image-10@2x.png" />
              </div>
              <div className="item6">
                <img className="image-icon8" alt="" src="/image-11@2x.png" />
              </div>
              <div className="item7">
                <b className="network-operators">
                  <p className="network">800+ network</p>
                  <p className="operators1">operators</p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <Section />
        <div className="section2">
          <div className="feedback">
            <div className="feedback-title">
              <h2 className="our-users-feedback-container">
                <p className="our-users-feedback">
                  Our users' feedback about eSIM data plans from
                </p>
                <p className="globalesync">GlobaleSync</p>
              </h2>
              <div className="feedback-buttons">
                <div className="feedback-navigate">
                  <img className="button-svg2" alt="" src="/button--svg.svg" />
                  <img
                    className="button-svg3"
                    alt=""
                    src="/button--svg-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <Container />
        </div>
        <div className="section3">
          <h2 className="heading-26">FAQ about eSIM for United States (USA)</h2>
          <FaqContainer />
        </div>
        <Background />
        <div className="container1" />
      </main>
    </div>
  );
};

export default USAPackage;
