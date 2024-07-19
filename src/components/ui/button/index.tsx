import React from "react";
import cn from "@/utils/cn";

export type ButtonVariant = "solid" | "soft";
export type ButtonColor = "primary" | "red";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonType = {
  children: React.ReactNode;
  variant?: "solid" | "soft";
  color?: "primary" | "red";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  (
    { children, className, type, variant, color, size, ...props }: ButtonType,
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type || "button"}
        className={cn(
          "font-normal px-3 py-1.5 rounded-[10px] text-base transition-colors duration-200 focus-visible:outline-none",
          buttonVariants[variant || "solid"][color || "primary"],
          buttonSize[size || "md"],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const buttonSize = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1.5",
  lg: "px-5 py-3 text-lg",
};

type ButtonVariants = {
  [key in ButtonVariant]: {
    [key in ButtonColor]: string;
  };
};

const buttonVariants: ButtonVariants = {
  solid: {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    red: "bg-red-600 text-white hover:bg-red-700",
  },
  soft: {
    primary: "bg-brand-50 text-blue-600 hover:bg-gray-100",
    red: "bg-red-100 text-red-600 hover:bg-red-200",
  },
};

export default Button;
