<script setup>
const route = useRoute();
const store = useGenresStore();
const { genres, links } = storeToRefs(store);
const page = computed(() => Number(route.query.page) || 1);
await store.fetchGenres(page.value);

watch(page, async (newPage) => {
  await store.fetchGenres(newPage);
});

const prev = computed(() => links.value.previous || undefined);
const next = computed(() => links.value.next || undefined);
</script>

<template>
  <div>
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
    <PaginationLinks :prev="prev" :next="next" />
  </div>
</template>
