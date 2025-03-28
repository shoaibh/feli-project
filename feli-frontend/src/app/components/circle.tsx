import React from "react";

export const Circle = ({ size, color }: { size: string; color: string }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
      }}
    />
  );
};
