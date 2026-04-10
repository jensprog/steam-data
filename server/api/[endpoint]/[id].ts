import https from "node:https";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const endpoint = getRouterParam(event, "endpoint");
  const { apiBaseUrl } = useRuntimeConfig();
  const url = `${apiBaseUrl}/${endpoint}/${id}`;

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
