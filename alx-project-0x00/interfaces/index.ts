export interface ButtonProps {
  title: string;
  styles?: string;
  size: "small" | "medium" | "large" | "rounded";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
}

export interface PillProps {
  title: string;
}
