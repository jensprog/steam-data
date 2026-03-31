<script setup>
import { useApi } from "../../composables/useApi";

const { data: genres, fetchData: fetchGenres } = useApi("genres");
await fetchGenres();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="genre in genres" :key="genre.id">
        <td>
          <NuxtLink :to="`genres/${genre.id}`">{{ genre.name }}</NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>
