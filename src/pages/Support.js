import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Support.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Support = () => {

  return (
      <>
        <Header/>
        <div className="support">
          <main className="httpsyesimappcompatible-d">
            <FrameComponent1/>
            <div className="frame-group">
              <div className="heading-4-can-i-use-yesim-on-parent">
                <h2 className="heading-4">
                  Can I use GlobaleSync on my eSIM compatible laptop?
                </h2>
                <div className="unfortunately-pc-and-laptop-d-parent">
                  <div className="unfortunately-pc-and">
                    Unfortunately, PC and laptop devices are not supported by
                    GlobaleSync.
                  </div>
                  <div className="if-you-have">
                    If you have any questions, please do not hesitate to contact us.
                    We are happy to help!
                  </div>
                </div>
              </div>
              <div className="backgroundshadow">
                <div className="heading-41">Popular destinations</div>
              </div>
            </div>
            <div className="container"/>
          </main>
        </div>
        <Footer/>
      </>
  );
};

export default Support;
