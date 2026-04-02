import https from "node:https";

export default defineEventHandler(async (event) => {
  const endpoint = getRouterParam(event, "endpoint");
  const { apiBaseUrl } = useRuntimeConfig();
  const query = getQuery(event);
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  const baseUrl = `${apiBaseUrl}/${endpoint}`;
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

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
