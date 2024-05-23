import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkButtonClick = useCallback(() => {
    navigate("/httpsyesimappregions-13052024-143248-eest");
  }, [navigate]);

  const onLinkButton1Click = useCallback(() => {
    // Please sync "https://yesim.app/global/ - 13/05/2024, 14:33:07 EEST" to the project
  }, []);

  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://yesim.app/international-esim/ - 13/05/2024, 14:33:24 EEST" to the project
  }, []);

  return (
    <div className={`overlay-parent ${className}`}>
      <TextField
        className="overlay3"
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
      <div className="link-button-parent">
        <button className="link-button">
          <img className="image-icon23" alt="" src="/image-1@2x.png" />
          <div className="countries-wrapper">
            <a
              className="countries"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-2"
              target="_blank"
            >
              Countries
            </a>
          </div>
        </button>
        <div className="link-button1" onClick={onLinkButtonClick}>
          <img className="image-icon24" alt="" src="/image-2@2x.png" />
          <div className="regions-wrapper">
            <a
              className="regions1"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-8201"
              target="_blank"
            >
              Regions
            </a>
          </div>
        </div>
        <div className="link-button2" onClick={onLinkButton1Click}>
          <img className="image-icon25" alt="" src="/image-3@2x.png" />
          <div className="global-wrapper">
            <a
              className="global"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-10762"
              target="_blank"
            >
              Global
            </a>
          </div>
        </div>
      </div>
      <div className="link" onClick={onLinkContainerClick}>
        <div className="frame-parent7">
          <div className="image-wrapper1">
            <img className="image-icon26" alt="" src="/image-4@2x.png" />
          </div>
          <div className="international-esim-parent">
            <a
              className="international-esim"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-11641"
              target="_blank"
            >
              International eSIM
            </a>
            <a
              className="unlimited-data-pay"
              href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-11641"
              target="_blank"
            >
              Unlimited data. Pay as you go
            </a>
          </div>
        </div>
        <div className="svg-frame">
          <img className="svg-icon10" alt="" src="/svg-2.svg" />
        </div>
      </div>
    </div>
  );
};


export default FrameComponent9;
