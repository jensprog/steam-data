<script setup>
import { useApi } from "../../composables/useApi";

const { data: developers, fetchData: fetchDevelopers } = useApi("developers");
await fetchDevelopers();
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
