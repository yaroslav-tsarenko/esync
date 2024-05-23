import { useMemo } from "react";
import "./Feedback.css";

const Feedback = ({
  className = "",
  ourUsersFeedbackAboutESIM,
  propFlexWrap,
  propGap,
  propDebugCommit,
  propRowGap,
  propDebugCommit1,
}) => {
  const feedbackHeadingStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
      gap: propGap,
    };
  }, [propFlexWrap, propGap]);

  const ourUsersFeedbackContainer1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const reviewButtonsStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
      debugCommit: propDebugCommit1,
    };
  }, [propRowGap, propDebugCommit1]);

  return (
    <div className={`feedback ${className}`}>
      <div className="feedback-heading" style={feedbackHeadingStyle}>
        <h2
          className="our-users-feedback-container1"
          style={ourUsersFeedbackContainer1Style}
        >
          <p className="our-users-feedback1">{ourUsersFeedbackAboutESIM}</p>
          <p className="globalesync1">GlobaleSync</p>
        </h2>
        <div className="feedback-buttons1">
          <div className="review-buttons" style={reviewButtonsStyle}>
            <img className="button-svg12" alt="" src="/button--svg-2.svg" />
            <img className="button-svg13" alt="" src="/button--svg-3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  className: PropTypes.string,
  ourUsersFeedbackAboutESIM: PropTypes.string,

  /** Style props */
  propFlexWrap: PropTypes.any,
  propGap: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propRowGap: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default Feedback;
