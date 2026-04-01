<script setup>
import { useDevelopersStore } from "../../stores/useDevelopersStore";

const store = useDevelopersStore();
const { developers } = storeToRefs(store);
await store.fetchDevelopers();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="developer in developers" :key="developer.id">
        <td><NuxtLink :to="`/developers/${developer.id}`">{{ developer.name }}</NuxtLink></td>
      </tr>
    </tbody>
  </table>
</template>
