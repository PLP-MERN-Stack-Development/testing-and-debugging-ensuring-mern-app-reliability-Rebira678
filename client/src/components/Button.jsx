import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  ...rest
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass =
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "btn-md";
  const disabledClass = disabled ? "btn-disabled" : "";
  return (
    <button
      type="button"
      className={`${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
