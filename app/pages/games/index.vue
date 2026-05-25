/* Index page for games, lists all games from the API and gives pagination controls */
<script setup>
const route = useRoute();
const store = useGamesStore();
const { games, links, error } = storeToRefs(store);
const page = computed(() => Number(route.query.page) || 1);
const pending = ref(false);
await store.fetchGames(page.value);

watch(page, async (newPage) => {
    pending.value = true;
    await store.fetchGames(newPage);
    pending.value = false;
});

const prev = computed(() => links.value.previous || undefined);
const next = computed(() => links.value.next || undefined);
</script>

<template>
    <div v-if="error" class="text-red-400 text-center mt-10">{{ error }}</div>
    <div v-else-if="pending" class="text-[#c7d5e0] text-center mt-10">Loading...</div>
    <div v-else>
        <GamesList :items="games" :base-path="'/games'" />
        <PaginationLinks :prev="prev" :next="next" />
    </div>
</template>
