import PropTypes from "prop-types";
import "./loader.css";

const Loader = ({ minHScreen = true }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        minHScreen && "min-h-screen"
      }`}
    >
      <svg className="container" viewBox="0 0 40 40" height="40" width="40">
        <circle
          className="track"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="4px"
          fill="none"
        />
        <circle
          className="car"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="4px"
          fill="none"
        />
      </svg>
    </div>
  );
};

Loader.propTypes = {
  minHScreen: PropTypes.bool,
};

export default Loader;
