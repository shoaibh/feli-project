"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SideBarNav } from "../components/sidebar-nav";

const sidebarNavs = [
  {
    link: "/dashboard",
    label: "DASHBOARD",
  },
  {
    link: "/dashboard/integration",
    label: "INTEGRATION",
  },
  {
    link: "/dashboard/settings",
    label: "SETTINGS",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex pt-16 min-h-[calc(100vh-4rem)]">
      <div className="flex-1 flex flex-col max-w-[340px] gap-3 pt-3 w-full border-r border-solid border-[#55476A]">
        {sidebarNavs.map((nav) => (
          <SideBarNav
            key={nav.link}
            link={nav.link}
            label={nav.label}
            isActive={pathname === nav.link}
          />
        ))}
      </div>
      <section className="flex-1">{children}</section>
    </div>
  );
}
