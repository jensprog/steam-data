/* Plugin for refreshen token, checking if the user is still logged in and refreshing the token if necessary. */
export default defineNuxtPlugin(() => {
    setInterval(
        async () => {
            const data = await $fetch("/api/auth/me");
            if (data) {
                $fetch("/api/auth/refresh");
            }
        },
        55 * 60 * 1000,
    ); // Refresh every 55 minutes
});
