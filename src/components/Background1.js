import { useState, useCallback } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import LinkButton3 from "./LinkButton3";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);

  const onLinkButtonClick = useCallback(() => {
    // Please sync "https://yesim.app/country/united-states/ - 13/05/2024, 14:33:43 EEST" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`background12 ${className}`}>
        <div className="heading-2-popular-destinatio-parent">
          <h2 className="heading-24">Popular destinations</h2>
          <div className="frame-parent9">
            <div className="link-button-group">
              <div className="link-button4" onClick={onLinkButtonClick}>
                <div className="frame-parent10">
                  <div className="container-container">
                    <img
                      className="container-icon8"
                      loading="lazy"
                      alt=""
                      src="/container.svg"
                    />
                  </div>
                  <div className="container-parent1">
                    <div className="container5">
                      <a
                        className="united-states-usa"
                        href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-14066"
                        target="_blank"
                      >
                        United States (USA)
                      </a>
                    </div>
                    <a
                      className="from-159gb"
                      href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-14066"
                      target="_blank"
                    >
                      from $1.59/GB
                    </a>
                  </div>
                </div>
                <div className="svg-wrapper2">
                  <img className="svg-icon12" alt="" src="/svg-2.svg" />
                </div>
              </div>
              <div className="link-button5">
                <div className="container-frame">
                  <img
                    className="container-icon9"
                    alt=""
                    src="/container-1.svg"
                  />
                </div>
                <div className="container-parent2">
                  <div className="container6">
                    <div className="united-arab-emirates">
                      United Arab Emirates (UAE)
                    </div>
                  </div>
                  <div className="from-303gb">from $3.03/GB</div>
                </div>
                <div className="svg-wrapper3">
                  <img className="svg-icon13" alt="" src="/svg-2.svg" />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <DatePicker
                value={frameDateTimePickerValue}
                onChange={(newValue) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "transparent",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "transparent" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#0c0c0d",
                    fontSize: 17,
                  },
                  input: {
                    color: "#0c0c0d",
                    fontSize: 17,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 60,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    helperText: "Turkey",
                    placeholder: "Turkey",
                  },
                  openPickerIcon: {
                    component: () => (
                      <img width="32px" height="32px" src="/container-3.svg" />
                    ),
                  },
                }}
                label="Thailand"
              />
            </div>
            <div className="link-button-container">
              <LinkButton3
                container="/container-4.svg"
                egypt="Egypt"
                from319GB="from $3.19/GB"
              />
              <LinkButton3
                container="/container-5.svg"
                egypt="Spain"
                from319GB="from $1.59/GB"
                propMinWidth="45px"
              />
            </div>
            <div className="link-button-parent1">
              <LinkButton3
                container="/container-6.svg"
                egypt="Italy"
                from319GB="from $1.59/GB"
                propMinWidth="34px"
              />
              <LinkButton3
                container="/container-7.svg"
                egypt="Germany"
                from319GB="from $1.59/GB"
                propMinWidth="72.5px"
              />
            </div>
            <div className="link-button-parent2">
              <LinkButton3
                container="/container-8.svg"
                egypt="China"
                from319GB="from $2.75/GB"
                propMinWidth="46px"
              />
              <div className="link-button6">
                <div className="frame-parent11">
                  <div className="container-wrapper1">
                    <img
                      className="container-icon10"
                      alt=""
                      src="/container-9@2x.png"
                    />
                  </div>
                  <div className="container-parent3">
                    <div className="container7">
                      <div className="united-kingdom-uk">
                        United Kingdom (UK)
                      </div>
                    </div>
                    <div className="from-171gb">from $1.71/GB</div>
                  </div>
                </div>
                <div className="svg-wrapper4">
                  <img className="svg-icon14" alt="" src="/svg-2.svg" />
                </div>
              </div>
            </div>
            <div className="link-button-parent3">
              <LinkButton3
                container="/container-10@2x.png"
                egypt="Israel"
                from319GB="from $1.71/GB"
                propMinWidth="43.1px"
              />
              <LinkButton3
                container="/container-11.svg"
                egypt="France"
                from319GB="from $1.76/GB"
                propMinWidth="55px"
              />
            </div>
          </div>
        </div>
        <Button
          className="button"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "14",
            background: "#4cff3c",
            borderRadius: "20px",
            "&:hover": { background: "#4cff3c" },
            height: 40,
          }}
        >
          Show all eSIM cards
        </Button>
      </div>
    </LocalizationProvider>
  );
};


export default Background1;
