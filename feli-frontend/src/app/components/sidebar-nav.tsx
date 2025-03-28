import Link from "next/link";
import React from "react";
import { Circle } from "./circle";

export const SideBarNav = ({
  link,
  label,
  isActive = false,
}: {
  link: string;
  label: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={link}
      className={`p-4 ${
        isActive ? "bg-[#1F1B25]" : ""
      } flex items-center gap-3 hover:bg-[#1F1B25] cursor-pointer`}
    >
      <Circle color={isActive ? "#60F7A9" : "#87968C"} size="32" />
      <div
        className={`text-[20px] ${
          isActive ? "text-[#4AFF8A]" : "text-[#87968C]"
        }  font-semibold`}
      >
        {label}
      </div>
    </Link>
  );
};
