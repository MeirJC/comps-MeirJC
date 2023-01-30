import PropTypes from "prop-types";
import classNames from "classnames";

// Button component that accepts the props as booleans to set the Tailwind CSS classes
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  // Check if only one of the following props is true
  // then set the appropriate Tailwind CSS classes
  console.log(rest);
  const btnClass = classNames(
    rest.className,
    "px-3 py-1.5 border m-0.5 flex items-center justify-center w-36",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white text-gray-900 outline-4": outline,
      "text-blue-500 outline-blue-500": outline && primary,
      "text-gray-900 outline-gray-900": outline && secondary,
      "text-green-500 outline-green-500": outline && success,
      "text-yellow-400 outline-yellow-400": outline && warning,
      "text-red-500 outline-red-500": outline && danger,
    }
  );
  console.log(btnClass);
  return (
    <button {...rest} className={btnClass}>
      {children}
    </button>
  );
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
