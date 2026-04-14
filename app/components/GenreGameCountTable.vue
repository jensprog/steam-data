<script setup>
const { data } = await useFetch("/api/stats/genres/by-games");
</script>

<template>
  <div>
    <ItemTable :items="data.genres" name="Genre" label="Games" />
  </div>
</template>
