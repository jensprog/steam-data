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
    <table class="table-auto mx-auto lg:text-xl border-collapse">
      <thead>
        <tr>
          <th class="border border-gray-400 py-2 px-4">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.id">
          <td class="border border-gray-400 py-2 px-4">
            <NuxtLink :to="`games/${game.id}`">{{ game.name }}</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationLinks :prev="prev" :next="next" />
  </div>
</template>
