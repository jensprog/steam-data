/* Fetching developer details based on the ID from the URL */
<script setup>
const route = useRoute();
const developerId = route.params.id;
const { data: developer, fetchData: fetchDeveloper } = useApiDetails("developers", developerId);
await fetchDeveloper();

const gameLinks = computed(() => developer.value?.links.filter((link) => link.rel === "related") ?? []);
</script>

<template>
  <div v-if="developer" :key="developer.id">
    <h1>
      <strong>{{ developer.name }}</strong>
    </h1>
    <ul>
      <strong>Games Developed: </strong>
      <ResourceLinks :links="gameLinks" label="Game" />
    </ul>
  </div>
  <div v-else>
    <p>Loading developer details...</p>
  </div>
</template>
