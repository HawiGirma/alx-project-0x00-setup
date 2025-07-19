export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles: string;
  size: "small" | "medium" | "large" | "full";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"; // <-- Include rounded-full here
}
