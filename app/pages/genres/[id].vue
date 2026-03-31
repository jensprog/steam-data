/* Fetching genre details based on the ID from the URL */
<script setup>
import { useApiDetails } from "../../composables/useApiDetails";
import { useRoute } from "vue-router";

const route = useRoute();
const genreId = route.params.id;
const { data: genre, fetchData: fetchGenre } = useApiDetails("genres", genreId);
await fetchGenre();

const genreLinks = computed(() => genre.value?.links.filter((link) => link.rel === "related") ?? []);
</script>

<template>
  <div v-if="genre" :key="genre.id">
    <h1>
      <strong>{{ genre.name }}</strong>
    </h1>
    <ul>
      <li v-for="link in genreLinks" :key="link.href">
        <strong>Game: </strong>
        <NuxtLink :to="link.href">{{ link.title.replace("Game: ", "") }} </NuxtLink>
      </li>
    </ul>
  </div>
</template>
