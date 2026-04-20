/* Returns an authenticated user based on the access token provided in the request cookies. */
import { defineEventHandler, getCookie } from "h3";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  if (!token) {
    return null;
  }

  const { apiBaseUrl } = useRuntimeConfig();
  try {
    const user = await $fetch(`${apiBaseUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
});
