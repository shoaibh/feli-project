import React from "react";

export const CustomButton = ({
  isLoading,
  label,
  type,
  onClick,
  className,
}: {
  isLoading?: boolean;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={className || ""}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
