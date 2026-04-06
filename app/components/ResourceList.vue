/* A reusable component to display a list of resources (like games, genres, etc.) in a table format. It takes an array
of items and a base path for the links. Each item is expected to have an 'id' and 'name' property. The component
generates a table where each row contains a link to the resource's detail page based on the provided base path. */
<script setup>
defineProps({
  items: Array,
  basePath: String,
});
</script>

<template>
  <div>
    <table class="table-auto mx-auto lg:text-xl border-collapse">
      <thead>
        <tr>
          <th class="border border-gray-400 py-2 px-4">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="border border-gray-400 py-2 px-4">
            <NuxtLink :to="`${basePath}/${item.id}`">{{ item.name }}</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
