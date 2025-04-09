import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva("cursor-pointer", {
  variants: {
    appearance: {
      primary:
        "bg-[#FF0016]  py-4 px-10 m-auto w-[65%] rounded-sm text-[#DDD7E6] hover:text-white text-2xl font-semibold disabled:opacity-50",
      secondary: "text-[#87968C]  hover:text-[#bcc5bf] text-[18px] font-medium",
    },
  },
  defaultVariants: {
    appearance: "primary",
  },
});

export const CustomButton = ({
  isLoading,
  label,
  type,
  onClick,
  className,
  appearance = "primary",
}: {
  isLoading?: boolean;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  appearance: "primary" | "secondary";
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={cn(buttonVariants({ appearance, className }))}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
