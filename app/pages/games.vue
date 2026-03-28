<script setup>
import { useGames } from "../composables/useGames";

const { games, fetchGames } = useGames();

await fetchGames();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Developer</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in games" :key="game.id">
        <td>{{ game.name }}</td>
        <td>{{ game.developer }}</td>
        <td>{{ game.genre }}</td>
      </tr>
    </tbody>
  </table>
</template>
