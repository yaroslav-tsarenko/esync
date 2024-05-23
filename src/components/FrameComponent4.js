import { Button } from "@mui/material";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`transform-your-business-travel-parent ${className}`}>
      <h1 className="transform-your-business-container">
        <span>
          <p className="transform-your-business">
            Transform your business travel with GlobaleSync's
          </p>
          <p className="global-esim-solutions">global eSIM solutions</p>
        </span>
      </h1>
      <div className="empower-your-team-with-seamles-wrapper">
        <div className="empower-your-team-container">
          <p className="empower-your-team">
            Empower your team with seamless connectivity worldwide. Discover
            cost-efficient, easy-
          </p>
          <p className="to-manage-esim-solutions">
            to-manage eSIM solutions for your international business needs.
          </p>
        </div>
      </div>
      <div className="button-wrapper">
        <Button
          className="button3"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "17",
            background: "#4cff3c",
            borderRadius: "16px",
            "&:hover": { background: "#4cff3c" },
            width: 196.7,
            height: 54,
          }}
        >
          Send your request
        </Button>
      </div>
    </div>
  );
};



export default FrameComponent4;
