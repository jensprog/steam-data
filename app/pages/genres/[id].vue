/* Fetching genre details based on the ID from the URL */
<script setup>
const route = useRoute();
const genreId = route.params.id;
const { data: genre, fetchData: fetchGenre } = useApiDetails("genres", genreId);
await fetchGenre();

const gameLinks = computed(() => genre.value?.links.filter((link) => link.rel === "related") ?? []);
</script>

<template>
  <div v-if="genre" :key="genre.id">
    <h1>
      <strong>{{ genre.name }}</strong>
    </h1>
    <ul>
      <strong>Game: </strong>
      <ResourceLinks :links="gameLinks" label="Game" />
    </ul>
  </div>
</template>
