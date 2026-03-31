<script setup>
import { useApi } from "../../composables/useApi";

const { data: games, fetchData: fetchGames } = useApi("games");
await fetchGames();
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
