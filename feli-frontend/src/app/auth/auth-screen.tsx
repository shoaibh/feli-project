"use client";

import { useState } from "react";
import { SignInUpCard } from "./sign-in-up-card";

export const AuthScreen = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(true);

  return (
    <div className="grid min-h-[calc(100vh-4rem)] place-items-center">
      <div>
        <h2 className="text-[#4AFF8A] text-5xl text-center font-semibold mb-10">
          {showLoginScreen ? "LOG IN" : "SIGN UP"}
        </h2>
        <div className="bg-[#1F1B25] rounded-sm text-center m-auto w-[90%] md:w-[414px]">
          <SignInUpCard
            setShowLoginScreen={setShowLoginScreen}
            showLoginScreen={showLoginScreen}
          />
        </div>
      </div>
    </div>
  );
};
