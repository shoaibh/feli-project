"use client";

import { CustomButton } from "@/app/components/custom-button";
import { callApi } from "@/app/utils/callApi";
import { useRouter } from "next/navigation";
import React from "react";

export default function SettingsPage() {
  const router = useRouter();

  const onClick = async () => {
    try {
      await callApi("/logout", "POST");
      router.push("/auth");
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <div className="grid min-h-[calc(100vh-4rem)] place-items-center">
      <CustomButton
        onClick={onClick}
        className="bg-[#FF0016]  cursor-pointer py-5 px-7 m-auto rounded-sm text-[#DDD7E6] text-2xl font-semibold"
        label="Logout"
      />
    </div>
  );
}
