import https from "node:https";

export default defineEventHandler(async () => {
  const { apiBaseUrl } = useRuntimeConfig();
  const url = `${apiBaseUrl}/games`;

  if (!url.startsWith("https")) {
    return await $fetch(url);
  }

  return new Promise((resolve, reject) => {
    https
      .get(url, { rejectUnauthorized: false }, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", reject);
  });
});
