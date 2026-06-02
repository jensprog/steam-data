<script setup lang="ts">
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

const { data } = await useFetch<
    { rank: number; name: string; header_image: string; concurrent_in_game: number; peak_in_game: number }[]
>(useApiUrl("stats/games/concurrent-players"));
</script>

<template>
    <div class="relative flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url(&quot;/images/hero-bg.jpg&quot;)" />
        <div class="absolute inset-0 bg-[#171a21] opacity-70" />

        <div class="relative z-10 max-w-2xl mx-auto py-8 px-4">
            <h1 class="text-2xl font-bold text-[#c7d5e0] mb-6">Most Played Right Now</h1>
            <RankingList v-if="data" :games="data" />
        </div>
    </div>
</template>
