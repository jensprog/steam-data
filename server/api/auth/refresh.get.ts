/* Refreshes the user's authentication token. */
import { defineEventHandler, getCookie, setCookie } from "h3";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  if (!token) {
    return null;
  }

  const { apiBaseUrl } = useRuntimeConfig();
  try {
    const data = await $fetch<{ access_token: string }>(`${apiBaseUrl}/auth/refresh`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCookie(event, "token", data.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
    });

    return { success: true };
  } catch (error) {
    console.error("Error refreshing token:", error);
    return { success: false };
  }
});
