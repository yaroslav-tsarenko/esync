import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import "./BlogListing.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const BlogListing = () => {
  return (
      <>
        <Header/>
        <div className="blog-listing">
          <main className="httpsyesimappblog-130">
            <div className="frame-parent">
              <FrameComponent4/>
              <div className="heading-2-all-articles-parent">
                <h1 className="heading-22">All articles</h1>
                <div className="frame-group">
                  <FrameComponent3
                      overlayShadow="/overlayshadow-1@2x.png"
                      bestDestinationsToVisitIn="10 best destinations to visit in May"
                      prop="2024"
                      linkImage="/link--image-1@2x.png"
                      apr2024="16 Apr 2024"
                      minutesToRead="14 minutes to read"
                  />
                  <FrameComponent3
                      overlayShadow="/overlayshadow-2@2x.png"
                      bestDestinationsToVisitIn="Greece: mobile internet and SIM"
                      prop="cards for Tourists"
                      linkImage="/link--image-2@2x.png"
                      apr2024="11 Apr 2024"
                      minutesToRead="8 minutes to read"
                      propWidth="unset"
                      propMinWidth="117px"
                  />
                  <FrameComponent3
                      overlayShadow="/overlayshadow-3@2x.png"
                      bestDestinationsToVisitIn="TOP 10 Hotels in Turkey 2024:"
                      prop="Overview"
                      linkImage="/link--image-3@2x.png"
                      apr2024="09 Apr 2024"
                      minutesToRead="10 minutes to read"
                      propWidth="unset"
                      propMinWidth="124px"
                  />
                </div>
              </div>
              <FrameComponent1/>
            </div>
            <div className="button-wrapper">
              <button className="button">
                <div className="load-more">Load more</div>
              </button>
            </div>
            <div className="container2"/>
          </main>
        </div>
        <Footer/>
      </>

  );
};

export default BlogListing;
