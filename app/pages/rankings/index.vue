<script setup lang="ts">
const { data } = await useFetch<
    { rank: number; name: string; header_image: string; concurrent_in_game: number; peak_in_game: number }[]
>(useApiUrl("stats/games/concurrent-players"));
</script>

<template>
    <div class="max-w-2xl mx-auto py-8 px-4">
        <h1 class="text-2xl font-bold text-[#c7d5e0] mb-6">Most Played Right Now</h1>
        <RankingList v-if="data" :games="data" />
    </div>
</template>
