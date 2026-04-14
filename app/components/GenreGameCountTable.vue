<script setup>
const { data } = await useFetch("/api/stats/genre/by-games");
</script>

<template>
  <div>
    <ItemTable :items="data.genres" label="Games" />
  </div>
</template>
