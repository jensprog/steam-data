<script setup>
const store = useGenresStore();
const { genres } = storeToRefs(store);
await store.fetchGenres();
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
