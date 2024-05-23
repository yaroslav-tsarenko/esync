import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LinkButton6 from "./LinkButton6";
import RegionGrid from "./RegionGrid";
import Background2 from "./Background2";
import Background3 from "./Background3";
import Section5 from "./Section5";
import Section6 from "./Section6";
import FrameComponent5 from "./FrameComponent5";
import Container1 from "./Container1";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  const onLinkButton1Click = useCallback(() => {
    // Please sync "https://yesim.app/global/ - 13/05/2024, 14:33:07 EEST" to the project
  }, []);

  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://yesim.app/international-esim/ - 13/05/2024, 14:33:24 EEST" to the project
  }, []);

  const onLinkButtonClick = useCallback(() => {
    // Please sync "https://yesim.app/regions/south-caribbean-cruise-esim/ - 13/05/2024, 14:35:50 EEST" to the project
  }, []);

  const onLinkButton2Click = useCallback(() => {
    // Please sync "https://yesim.app/regions/europe-esim/ - 13/05/2024, 14:35:29 EEST" to the project
  }, []);

  return (
    <div className={`frame-parent63 ${className}`}>
      <div className="frame-parent64">
        <div className="one-globalesync-many-destinat-parent">
          <h1 className="one-globalesync-many-container">
            <span className="one-globalesync-many-container1">
              <p className="one-globalesync-many">One GlobaleSync, Many</p>
              <p className="destinations">Destinations!</p>
            </span>
          </h1>
          <div className="rating">
            <div className="background-container">
              <button className="background43">
                <b className="b1">4.5</b>
                <div className="rating-s-v-g">
                  <img className="svg-icon61" alt="" src="/svg.svg" />
                </div>
              </button>
              <div className="k-ratings-container">
                <div className="k-ratings1">10K+ ratings</div>
              </div>
            </div>
          </div>
        </div>
        <TextField
          className="overlay12"
          placeholder="Find a country"
          variant="outlined"
          InputProps={{
            startAdornment: <img width="20px" height="20px" src="/svg-1.svg" />,
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "46px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              paddingLeft: "16px",
              borderRadius: "16px",
            },
            "& .MuiInputBase-input": {
              paddingLeft: "8px",
              color: "rgba(255, 255, 255, 0.74)",
            },
          }}
        />
        <div className="button-links">
          <div className="link-button18">
            <img className="image-icon76" alt="" src="/image@2x.png" />
            <div className="location-names">
              <a
                className="countries6"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-2"
                target="_blank"
              >
                Countries
              </a>
            </div>
          </div>
          <button className="link-button19">
            <img className="image-icon77" alt="" src="/image-110@2x.png" />
            <div className="regions-container">
              <a
                className="regions2"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-8201"
                target="_blank"
              >
                Regions
              </a>
            </div>
          </button>
          <div className="link-button20" onClick={onLinkButton1Click}>
            <img className="image-icon78" alt="" src="/image-3@2x.png" />
            <div className="global-container">
              <a
                className="global1"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-10762"
                target="_blank"
              >
                Global
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="link1" onClick={onLinkContainerClick}>
        <div className="international-e-sim-content">
          <div className="e-s-i-m-image">
            <img className="image-icon79" alt="" src="/image-4@2x.png" />
          </div>
          <div className="international-esim-container">
            <a
              className="international-esim2"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-11641"
              target="_blank"
            >
              International eSIM
            </a>
            <a
              className="unlimited-data-pay2"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-11641"
              target="_blank"
            >
              Unlimited data. Pay as you go
            </a>
          </div>
        </div>
        <div className="svg-wrapper18">
          <img className="svg-icon62" alt="" src="/svg-2.svg" />
        </div>
      </div>
      <div className="background44">
        <div className="regions-heading">
          <h2 className="heading-214">Regions</h2>
        </div>
        <div className="region-buttons">
          <div className="link-button21" onClick={onLinkButtonClick}>
            <img
              className="overlay-icon5"
              loading="lazy"
              alt=""
              src="/overlay1.svg"
            />
            <div className="region-content">
              <div className="container15">
                <a
                  className="south-caribbean-cruise"
                  href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-21052"
                  target="_blank"
                >
                  South Caribbean cruise
                </a>
              </div>
              <a
                className="countries7"
                href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-21052"
                target="_blank"
              >
                8 countries
              </a>
            </div>
            <div className="cruise-s-v-gs">
              <img className="svg-icon63" alt="" src="/svg-2.svg" />
            </div>
          </div>
          <div className="link-button22">
            <div className="region-second-content">
              <img className="overlay-icon6" alt="" src="/overlay1.svg" />
              <div className="container-parent13">
                <div className="container16">
                  <div className="eastern-caribbean-cruise">
                    Eastern Caribbean cruise
                  </div>
                </div>
                <div className="countries8">9 countries</div>
              </div>
            </div>
            <div className="continent-s-v-gs">
              <img className="svg-icon64" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
        <div className="region-buttons1">
          <div className="link-button23" onClick={onLinkButton2Click}>
            <div className="overlay-parent6">
              <img className="overlay-icon7" alt="" src="/overlay-2.svg" />
              <div className="europe-group">
                <a
                  className="europe1"
                  href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-18702"
                  target="_blank"
                >
                  Europe
                </a>
                <a
                  className="countries9"
                  href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-18702"
                  target="_blank"
                >
                  31 countries
                </a>
              </div>
            </div>
            <div className="svg-wrapper19">
              <img className="svg-icon65" alt="" src="/svg-2.svg" />
            </div>
          </div>
          <div className="link-button24">
            <div className="overlay-parent7">
              <img className="overlay-icon8" alt="" src="/overlay-3.svg" />
              <div className="container-parent14">
                <div className="container17">
                  <div className="asia-pacific">Asia Pacific</div>
                </div>
                <div className="countries10">15 countries</div>
              </div>
            </div>
            <div className="svg-wrapper20">
              <img className="svg-icon66" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
        <div className="region-buttons2">
          <LinkButton6
            overlay="/overlay-4.svg"
            overlay="/overlay-4.svg"
            overlay="/overlay-4.svg"
            northAmerica="North America"
            countries="3 countries"
          />
          <LinkButton6
            overlay="/overlay-5.svg"
            overlay="/overlay-5.svg"
            overlay="/overlay-5.svg"
            northAmerica="South America"
            countries="11 countries"
          />
        </div>
        <div className="region-buttons3">
          <div className="link-button25">
            <img className="overlay-icon9" alt="" src="/overlay-6.svg" />
            <div className="container-parent15">
              <div className="container18">
                <div className="western-caribbean-cruise">
                  Western Caribbean cruise
                </div>
              </div>
              <div className="countries11">6 countries</div>
            </div>
            <div className="svg-wrapper21">
              <img className="svg-icon67" alt="" src="/svg-2.svg" />
            </div>
          </div>
          <div className="link-button26">
            <div className="overlay-parent8">
              <img className="overlay-icon10" alt="" src="/overlay-7.svg" />
              <div className="container-parent16">
                <div className="container19">
                  <div className="middle-east">Middle East</div>
                </div>
                <div className="countries12">8 countries</div>
              </div>
            </div>
            <div className="svg-wrapper22">
              <img className="svg-icon68" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
        <div className="region-buttons4">
          <div className="link-button27">
            <div className="overlay-parent9">
              <img className="overlay-icon11" alt="" src="/overlay-8.svg" />
              <div className="africa-parent">
                <div className="africa">Africa</div>
                <div className="countries13">15 countries</div>
              </div>
            </div>
            <div className="svg-wrapper23">
              <img className="svg-icon69" alt="" src="/svg-2.svg" />
            </div>
          </div>
          <div className="link-button28">
            <div className="overlay-parent10">
              <img className="overlay-icon12" alt="" src="/overlay-9.svg" />
              <div className="container-parent17">
                <div className="container20">
                  <div className="scandinavian">Scandinavian</div>
                </div>
                <div className="countries14">6 countries</div>
              </div>
            </div>
            <div className="svg-wrapper24">
              <img className="svg-icon70" alt="" src="/svg-2.svg" />
            </div>
          </div>
        </div>
        <RegionGrid />
      </div>
      <div className="section10">
        <div className="how-to-container-wrapper">
          <div className="how-to-container">
            <div className="work-heading">
              <h2 className="heading-215">
                How does eSIM from GlobaleSync work?
              </h2>
            </div>
            <div className="how-to-buttons">
              <img className="button-svg12" alt="" src="/button--svg-2.svg" />
              <img className="button-svg13" alt="" src="/button--svg-3.svg" />
            </div>
          </div>
        </div>
        <div className="container21">
          <Background2 />
          <Background3
            prop="2"
            image="/image-6@2x.png"
            image="/image-6@2x.png"
            prop="2"
            chooseTheDestination="Choose the destination"
            andESIMDataPlan="and eSIM data plan"
            image="/image-6@2x.png"
            prop="2"
          />
          <Background3
            prop="3"
            image="/image-7@2x.png"
            image="/image-7@2x.png"
            prop="3"
            chooseTheDestination="Buy eSIM card most"
            andESIMDataPlan="suitable for your needs"
            image="/image-7@2x.png"
            prop="3"
          />
        </div>
      </div>
      <Section5 />
      <Section6 />
      <div className="section11">
        <FrameComponent5 />
        <Container1 />
      </div>
    </div>
  );
};



export default FrameComponent6;
