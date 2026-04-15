/* Dashboard page to render different components for visualized data */
<script setup lang="ts">
import DeveloperGameCountTable from "~/components/DeveloperGameCountTable.vue";
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-center">Dashboard</h1>
    <div class="grid grid-cols-2 gap-6">
      <PriceChart />
      <GameOwnerBar />
      <GenreGameCountTable />
      <DeveloperGameCountTable />
    </div>
  </div>
</template>
