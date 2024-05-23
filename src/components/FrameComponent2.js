import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-parent54 ${className}`}>
      <div className="heading-2-ready-to-elevate-y-wrapper">
        <h2 className="heading-211">
          Ready to elevate your corporate travel experience?
        </h2>
      </div>
      <div className="get-in-touch-with-globalesync-parent">
        <div className="get-in-touch">
          Get in touch with GlobaleSync business solutions today
        </div>
        <div className="frame-parent55">
          <div className="overlay-group">
            <TextField
              className="overlay6"
              placeholder="Company Name"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "46px",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                },
                "& .MuiInputBase-input": { color: "rgba(12, 12, 13, 0.46)" },
              }}
            />
            <TextField
              className="overlay7"
              placeholder="Full name"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "46px",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                },
                "& .MuiInputBase-input": { color: "rgba(12, 12, 13, 0.46)" },
              }}
            />
          </div>
          <div className="overlay-parent1">
            <TextField
              className="overlay8"
              placeholder="Company email address"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "46px",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                },
                "& .MuiInputBase-input": { color: "rgba(12, 12, 13, 0.46)" },
              }}
            />
            <TextField
              className="overlay9"
              placeholder="Website"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "46px",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                },
                "& .MuiInputBase-input": { color: "rgba(12, 12, 13, 0.46)" },
              }}
            />
          </div>
          <div className="textarea" />
        </div>
      </div>
      <div className="button-group">
        <Button
          className="button4"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "17",
            background: "#4cff3c",
            borderRadius: "16px",
            "&:hover": { background: "#4cff3c" },
            width: 105.1,
            height: 54,
          }}
        >
          Submit
        </Button>
        <div className="by-submitting-this-container">
          {`By submitting this form, you agree to our `}
          <span className="terms-of-service">Terms of Service</span>
          {` and `}
          <span className="privacy-policy">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent2;
