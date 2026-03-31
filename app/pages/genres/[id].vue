/* Fetching genre details based on the ID from the URL */
<script setup>
import { useApiDetails } from "../../composables/useApiDetails";
import { useRoute } from "vue-router";

const route = useRoute();
const genreId = route.params.id;
const { data: genre, fetchData: fetchGenre } = useApiDetails("genres", genreId);
await fetchGenre();
</script>

<template>
  <h1>{{ genre.name }}</h1>
</template>
