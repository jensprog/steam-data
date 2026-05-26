// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
    devtools: { enabled: true },

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap",
                },
            ],
        },
    },

    runtimeConfig: {
        apiBaseUrl: "http://localhost:8000",
        public: {
            apiBaseUrl: "http://localhost:8000",
        },
    },

    nitro: {
        devProxy: {
            "/api/stats": {
                target: "http://127.0.0.1:8000/stats",
                changeOrigin: true,
            },
        },
    },
    compatibilityDate: "2025-07-15",

    eslint: {
        config: {
            stylistic: true,
        },
    },
});
