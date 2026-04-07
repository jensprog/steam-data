/* Deletes cookie and redirects to homepage when user logs out. */
import { defineEventHandler, deleteCookie } from "h3";

export default defineEventHandler((event) => {
  deleteCookie(event, "token", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  sendRedirect(event, "/login");
});
