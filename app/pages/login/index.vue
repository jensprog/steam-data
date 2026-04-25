/* Login page using Oath 2.0 for authentication. */
<template>
    <div class="min-h-screen bg-[#171a21] flex items-center justify-center">
        <div class="bg-[#1b2838] p-10 rounded-lg shadow-lg flex flex-col items-center gap-6 w-full max-w-sm">
            <h1 class="text-[#66c0f4] text-2xl font-bold tracking-wide">Steam Games Archive</h1>
            <p class="text-[#c7d5e0] text-sm text-center">Sign in to access the archive</p>
            <a
                :href="`${config.public.apiBaseUrl}/auth/google`"
                class="w-full text-center bg-[#4a90d9] hover:bg-[#66c0f4] text-white font-semibold py-2 px-6 rounded transition-colors duration-200">
                Login with Google
            </a>
            <ToastMessage />
        </div>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const message = useState("authMessage");

onMounted(() => {
    if (route.query.toast === "logout") {
        message.value = "You have logged out";
        const url = new URL(window.location.href);
        url.searchParams.delete("toast");
        window.history.replaceState({}, "", url.toString());
    }
});
</script>
