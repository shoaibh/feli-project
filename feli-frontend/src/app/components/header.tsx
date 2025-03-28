"use client";

import React from "react";
import Image from "next/image";
import { Circle } from "./circle";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  return (
    <header className="fixed flex items-center bg-[#151318] z-10 justify-between w-full h-16 px-5 border-b border-[#55476A]">
      <div className="flex items-center gap-3">
        <div className="flex flex-col justify-between h-5 cursor-pointer space-y-1.5">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="w-6 h-0.5 bg-[#55476A] rounded"></span>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Image src="/feli-logo.svg" width={27} height={30} alt="logo" />
          <Image src="/feli-name-logo.svg" width={55} height={40} alt="logo" />
        </div>
      </div>

      {isDashboard && (
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Circle size="18" color="#8CB7F9" />
            <p className="text-[#8CB7F9] font-medium text-lg">
              Watch the performance of your omni-channel campaigns
            </p>
          </div>
          <Circle size="32" color="#84C9A5" />
        </div>
      )}
    </header>
  );
};

export default Header;
