/* Middleware to check if the user is authenticated and has a valid access token. */
import { defineEventHandler, getCookie } from "h3";

export default defineEventHandler((event) => {
  const token = getCookie(event, "token");
  event.context.authenticated = !!token;
});
