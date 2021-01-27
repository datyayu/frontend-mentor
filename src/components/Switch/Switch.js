import PropTypes from "prop-types";

export function Switch({ active, onChange }) {
  return (
    <label className="switch">
      <input className="switch-input" type="checkbox" onChange={onChange} />
      <span className="switch-slider"></span>
    </label>
  );
}

Switch.propTypes = {
  active: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  active: false,
};
