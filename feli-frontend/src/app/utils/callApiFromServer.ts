import { cookies } from "next/headers";

export const callApiFromServer = async (
  endpoint: string,
  method: string = "GET",
  body?: unknown,
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api${endpoint}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
        mode: "cors",
      },
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
