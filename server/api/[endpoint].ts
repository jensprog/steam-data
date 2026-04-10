import https from "node:https";

export default defineEventHandler(async (event) => {
  const endpoint = getRouterParam(event, "endpoint");
  const { apiBaseUrl } = useRuntimeConfig();
  const query = getQuery(event);
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  const baseUrl = `${apiBaseUrl}/${endpoint}`;
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;
  const token = getCookie(event, "token");

  if (event.context.authenticated === false) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  if (!url.startsWith("https")) {
    return await $fetch(url);
  }

  const method = event.method;

  if (method === "POST") {
    const body = await readBody(event);
    return await $fetch(url, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body,
    });
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
