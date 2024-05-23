import FrameComponent from "../components/FrameComponent";
import MissionContent from "../components/MissionContent";
import "./OurMission.css";

const OurMission = () => {
  return (
    <div className="our-mission">
      <main className="httpsyesimappabout-us-">
        <FrameComponent />
        <div className="expertise-content-parent">
          <MissionContent
            heading2OurMission="Our core expertise"
            ourMissionIsToConnectPeop="Our core expertise is global fast and easy"
            liveWorkAndExploreTheWorl="connectivity by means of eSIM mobile solutions"
            inspireGlobetrottersEntre="that facilitate people's enjoyment of the"
            technophilesToApplyCuttin="connection, safeguard users’ sensitive data, and"
            forEnhancingTheirExperien="give them control over their digital lives."
            propMinWidth="383.1999999999971px"
          />
          <img
            className="image-icon"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div className="section-parent">
          <div className="section">
            <h1 className="heading-2">Our success in figures</h1>
            <div className="data-highlights">
              <div className="paragraphbackground">
                <b className="m">2.2M</b>
                <div className="used-data-gb">Used data, GB</div>
              </div>
              <div className="paragraphbackground1">
                <b className="m1">2.0M</b>
                <div className="total-days-used">Total days used</div>
              </div>
              <div className="paragraphbackground2">
                <b className="k">300k</b>
                <div className="active-users">Active users</div>
              </div>
            </div>
          </div>
          <div className="section1">
            <h1 className="heading-21">What we strongly believe in</h1>
            <div className="beliefs-content">
              <div className="background">
                <div className="innovation-and-excellence-container">
                  <p className="innovation-and-excellence">
                    Innovation and excellence
                  </p>
                  <p className="empower-our-business">
                    empower our business. We
                  </p>
                  <p className="are-connecting-the">
                    are connecting the world.
                  </p>
                  <p className="all-around-the">All around the world.</p>
                </div>
                <div className="belief-images">
                  <img
                    className="image-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
              </div>
              <div className="background1">
                <div className="customers-drive-our-container">
                  <span>
                    <p className="customers-drive-our">Customers drive our</p>
                    <p className="success-our-business">
                      success. Our business is
                    </p>
                    <p className="about-meeting-their">
                      about meeting their needs,
                    </p>
                    <p className="emotions-and-flawless">
                      emotions, and flawless
                    </p>
                    <p className="journey">journey.</p>
                  </span>
                </div>
                <div className="image-wrapper">
                  <img
                    className="image-icon2"
                    loading="lazy"
                    alt=""
                    src="/image-4@2x.png"
                  />
                </div>
              </div>
              <div className="background2">
                <div className="freedom-and-convenience-container">
                  <p className="freedom-and-convenience">
                    Freedom and convenience make our lives
                  </p>
                  <p className="happier-our-user-friendly">
                    happier. Our user-friendly mobile app and
                  </p>
                  <p className="wide-ranging-seamless-coverage">
                    wide-ranging seamless coverage guarantee
                  </p>
                  <p className="our-customers-the">
                    our customers the ease and comfort of
                  </p>
                  <p className="communication-whenever-and">
                    communication whenever and wherever they
                  </p>
                  <p className="need-or-want">need or want it.</p>
                </div>
                <div className="image-container">
                  <img
                    className="image-icon3"
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container1" />
      </main>
    </div>
  );
};

export default OurMission;
