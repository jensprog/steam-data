import https from "node:https";

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, "path");
  const { apiBaseUrl } = useRuntimeConfig();
  const query = getQuery(event);
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  const baseUrl = `${apiBaseUrl}/stats/${path}`;
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  if (event.context.authenticated === false) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  if (!url.startsWith("https")) {
    return await $fetch(url);
  }

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", reject);
  });
});
