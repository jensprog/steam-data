/* Index page for games, lists all games from the API */
<script setup>
const route = useRoute();
const store = useGamesStore();
const { games, links } = storeToRefs(store);
const page = computed(() => Number(route.query.page) || 1);
await store.fetchGames(page.value);

watch(page, async (newPage) => {
  await store.fetchGames(newPage);
});

const prev = computed(() => links.value.previous || undefined);
const next = computed(() => links.value.next || undefined);
</script>

<template>
  <div>
    <ResourceList :items="games" :base-path="'/games'" />
    <PaginationLinks :prev="prev" :next="next" />
  </div>
</template>
