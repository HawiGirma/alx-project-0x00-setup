import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
  full: "w-full px-4 py-2 text-base",
};

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${
        sizeClasses[size]
      } ${shape} ${styles ?? ""}`}
    >
      {title}
    </button>
  );
};

export default Button;
