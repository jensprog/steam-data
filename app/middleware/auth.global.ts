/* Global middleware to handle redirect for users who's not authenticated */

export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useState("authMessage");
    const noAuthenticationPaths = ["/login", "/"];
    const headers = useRequestHeaders(["cookie"]);

    try {
        if (noAuthenticationPaths.includes(to.path)) {
            return;
        }

        const result = await $fetch("/api/auth/me", { headers });
        if (!result) {
            throw new Error();
        }
    } catch (error) {
        console.error("Authentication failed", error);
        auth.value = "You need to be logged in to access this resource";
        return navigateTo("/login");
    }
});
