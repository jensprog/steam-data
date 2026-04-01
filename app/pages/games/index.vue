/* Index page for games, lists all games from the API */
<script setup>
import { useGamesStore } from "../../stores/useGamesStore";

const store = useGamesStore();
const { games } = storeToRefs(store);
await store.fetchGames();
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in games" :key="game.id">
        <td>
          <NuxtLink :to="`games/${game.id}`">{{ game.name }}</NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>
