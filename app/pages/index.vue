<script setup>
definePageMeta({ layout: "home" });

const route = useRoute();
const message = useState("authMessage");

onMounted(() => {
    if (route.query.toast === "login") {
        message.value = "You are now logged in";
        const url = new URL(window.location.href);
        url.searchParams.delete("toast");
        window.history.replaceState({}, "", url.toString());
    }
});
</script>

<template>
    <div class="relative flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <!-- Background image -->
        <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url(&quot;/images/hero-bg.jpg&quot;)" />
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-[#171a21] opacity-70" />

        <!-- Content -->
        <div class="relative z-10 text-center px-6 max-w-3xl">
            <h1 class="text-4xl font-bold text-[#66c0f4] mb-4">Steam Games Archive</h1>
            <p class="text-lg text-[#c6d4df] mb-8">
                Explore a collection of 15,000 games. Browse titles, developers, and genres from the Steam platform and
                check different data in the dashboard.
            </p>
            <div class="flex gap-4 justify-center">
                <NuxtLink
                    to="/games"
                    class="px-6 py-3 bg-[#4c6b22] hover:bg-[#5a7a2a] text-white font-semibold rounded transition-colors">
                    Browse Games
                </NuxtLink>
                <NuxtLink
                    to="/dashboard"
                    class="px-6 py-3 bg-[#1b2838] hover:bg-[#2a3f5f] border border-[#66c0f4] text-[#66c0f4] font-semibold rounded transition-colors">
                    View Dashboard
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
