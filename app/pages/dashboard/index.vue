/* Dashboard page to render different components for visualized data */
<script setup lang="ts">
import DeveloperGameCountTable from "~/components/DeveloperGameCountTable.vue";
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold mb-6 text-center">Dashboard</h1>
        <Suspense>
            <template #default>
                <div class="grid grid-cols-2 gap-6">
                    <PriceChart />
                    <GameOwnerBar />
                    <GenreGameCountTable />
                    <DeveloperGameCountTable />
                </div>
            </template>
            <template #fallback>
                <div class="text-[#c7d5e0] text-center mt-10">Loading dashboard...</div>
            </template>
        </Suspense>
    </div>
</template>
