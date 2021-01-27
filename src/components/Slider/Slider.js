import propTypes from "prop-types";

export function Slider({ stepCount, step, name, onStepChange }) {
  const cssStyles = getComputedStyle(document.documentElement);

  const sliderProgressColor = cssStyles.getPropertyValue(
    "--slider-progress-color"
  );
  const sliderBackgroundColor = cssStyles.getPropertyValue(
    "--slider-background-color"
  );
  const progressPercent = (step / stepCount) * 100;

  const backgroundImageStyle =
    "-webkit-gradient(linear, left top, right top, " +
    `color-stop(${progressPercent}%, ${sliderProgressColor}), ` +
    `color-stop(${progressPercent}%, ${sliderBackgroundColor})` +
    ")";

  return (
    <input
      type="range"
      className="slider"
      style={{ backgroundImage: backgroundImageStyle }}
      name={name}
      min="0"
      max={stepCount}
      value={step}
      onChange={onStepChange}
    />
  );
}

Slider.propTypes = {
  stepCount: propTypes.number,
  step: propTypes.number,
  name: propTypes.string,
  onStepChange: propTypes.func.isRequired,
};

Slider.defaultProps = {
  stepCount: 1,
  step: 0,
  name: "slider",
};
