/* Fetching game details based on the ID from the URL. Creating links for developers and genres to improve navigation */
<script setup>
const route = useRoute();
const gameId = route.params.id;
const { data: game, fetchData: fetchGame } = useApiDetails("games", gameId);
await fetchGame();

const developerLinks = computed(() => game.value?.links.filter((link) => link.title?.startsWith("Developer: ")) ?? []);
const genreLinks = computed(() => game.value?.links.filter((link) => link.title?.startsWith("Genre: ")) ?? []);
</script>

<template>
  <div v-if="game" :key="game.id">
    <h1>
      <strong>Game: </strong>
      <strong>{{ game.name }}</strong>
    </h1>
    <ul>
      <strong>Developer: </strong>
      <ResourceLinks :links="developerLinks" label="Developer" />
    </ul>
    <p><strong>Price:</strong> ${{ game.price.toFixed(2) }}</p>
    <p><strong>Release Date:</strong> {{ game.release_date }}</p>
    <ul>
      <strong>Genre: </strong>
      <ResourceLinks :links="genreLinks" label="Genre" />
    </ul>
    <p><strong>Estimated Owners:</strong> {{ game.estimated_owners }}</p>
    <p><strong>Metacritic Score:</strong> {{ game.metacritic_score }}</p>
    <p><strong>Compatible for Windows:</strong> {{ game.windows }}</p>
    <p><strong>Compatible for Mac:</strong> {{ game.mac }}</p>
    <p><strong>Compatible for Linux:</strong> {{ game.linux }}</p>
    <p><strong>Header Image:</strong> <img :src="game.header_image" :alt="game.name" /></p>
  </div>
  <div v-else>
    <p>Loading game details...</p>
  </div>
</template>
