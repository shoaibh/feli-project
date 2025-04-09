import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { callApi } from "@/app/utils/callApi";
import { CustomButton } from "@/app/components/custom-button";

export const SignInUpCard = ({
  setShowLoginScreen,
  showLoginScreen,
}: {
  setShowLoginScreen: (show: boolean) => void;
  showLoginScreen: boolean;
}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Both fields are required");
      setIsLoading(false);
      return;
    }

    try {
      await callApi(showLoginScreen ? "/login" : "/signup", "POST", formData);
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="font-semibold py-5 text-2xl text-[#DDD7E6] border-b border-[#55476A]">
        {showLoginScreen ? "Sign In To Your Account" : "Create Your Account"}
      </h3>

      {["email", "password"].map((field) => (
        <input
          key={field}
          type={field}
          id={field}
          value={formData[field as keyof typeof formData]}
          onChange={handleChange}
          required
          className="w-full text-2xl py-5 px-9 text-[#87968C] outline-none border-b border-[#55476A] placeholder-[#87968C] font-medium"
          placeholder={field.toUpperCase()}
        />
      ))}

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="text-center pt-9 pb-3 flex flex-col gap-1">
        <CustomButton
          type="submit"
          label={
            isLoading ? "Loading..." : showLoginScreen ? "Log In" : "Sign Up"
          }
          isLoading={isLoading}
          appearance="primary"
        />
        <CustomButton
          appearance="secondary"
          onClick={() => {
            setShowLoginScreen(!showLoginScreen);
          }}
          type="button"
          label={`OR ${showLoginScreen ? "SIGN UP" : "LOG IN"}`}
        />
      </div>
    </form>
  );
};
