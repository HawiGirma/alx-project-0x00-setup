import { ButtonProps } from "@/components/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  return (
    <button className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
