/* Fetching game details based on the ID from the URL */
<script setup>
import { useApiDetails } from "../../composables/useApiDetails";
import { useRoute } from "vue-router";

const route = useRoute();
const gameId = route.params.id;
const { data: game, fetchData: fetchGame } = useApiDetails("games", gameId);
await fetchGame();
</script>

<template>
  <div v-if="game" :key="game.id">
    <h1>
      <strong>{{ game.name }}</strong>
    </h1>
    <p><strong>Developer:</strong> {{ game.developers }}</p>
    <p><strong>Price:</strong> ${{ game.price.toFixed(2) }}</p>
    <p><strong>Release Date:</strong> {{ game.release_date }}</p>
    <p><strong>Genre:</strong> {{ game.genres }}</p>
    <p><strong>Estimated Owners:</strong> {{ game.estimated_owners }}</p>
    <p><strong>Metacritic Score:</strong> {{ game.metacritic_score }}</p>
    <p><strong>Windows platform:</strong> {{ game.windows }}</p>
    <p><strong>Mac platform:</strong> {{ game.mac }}</p>
    <p><strong>Linux platform:</strong> {{ game.linux }}</p>
    <p><strong>Header Image:</strong> <img :src="game.header_image" :alt="game.name" /></p>
  </div>
  <div v-else>
    <p>Loading game details...</p>
  </div>
</template>
