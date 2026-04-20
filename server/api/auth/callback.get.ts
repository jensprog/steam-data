/* Handles routing after successful authentication with the OAuth provider. */
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as string;
  const { apiBaseUrl } = useRuntimeConfig();

  const data = await $fetch<{ access_token: string }>(`${apiBaseUrl}/auth/google/callback?code=${code}`, {
    method: "GET",
  });

  setCookie(event, "token", data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60, // 1 hour
  });

  sendRedirect(event, "/");
});
