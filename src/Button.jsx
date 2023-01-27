import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  return <button className="bg-red-600">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  checkUnique: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);
    if (count > 1) {
      return new Error(
        "Only one of the following props can be true: primary, secondary, success, danger, warning"
      );
    }
  },
};

export default Button;
