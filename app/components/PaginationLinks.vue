/* Component that renders pagination links for all endpoints */
<script setup>
defineProps({
  prev: String,
  next: String,
});
</script>

<template>
  <div class="pagination-links flex justify-center gap-4 mt-4">
    <NuxtLink v-if="prev" :to="prev" class="pagination-link">Previous Page</NuxtLink>
    <NuxtLink v-if="next" :to="next" class="pagination-link">Next Page</NuxtLink>
  </div>
</template>
