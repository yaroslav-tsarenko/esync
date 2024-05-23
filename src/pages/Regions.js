import FrameComponent6 from "../components/FrameComponent6";
import Section7 from "../components/Section7";
import "./Regions.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Regions = () => {
  return (
      <>
        <Header/>
        <div className="regions">
          <main className="httpsyesimappregions-1">
            <section className="image-1-parent">
              <img className="image-1-icon" alt="" src="/imagelanding.svg"/>
              <img className="button-svg2" alt="" src="/button--svg.svg"/>
              <img className="button-svg3" alt="" src="/button--svg-1.svg"/>
            </section>
            <FrameComponent6/>
            <Section7/>
          </main>
        </div>
        <Footer/>
      </>
  );
};

export default Regions;
