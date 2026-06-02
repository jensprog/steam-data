<script setup lang="ts">
const route = useRoute();
const store = useRankingsStore();
const { rankings, links, error } = storeToRefs(store);
const page = computed(() => Number(route.query.page) || 1);
const pending = ref(false);
await store.fetchRankings(page.value);

watch(page, async (newPage) => {
    pending.value = true;
    await store.fetchRankings(newPage);
    pending.value = false;
});

const prev = computed(() => links.value.previous || undefined);
const next = computed(() => links.value.next || undefined);
</script>

<template>
    <div class="max-w-2xl mx-auto py-8 px-4">
        <h1 class="text-2xl font-bold text-[#c7d5e0] mb-6">Most Played Right Now</h1>
        <div v-if="error" class="text-red-400 text-center mt-10">{{ error }}</div>
        <div v-else-if="pending" class="text-[#c7d5e0] text-center mt-10">Loading...</div>
        <div v-else>
            <RankingList :games="rankings" />
            <PaginationLinks :prev="prev" :next="next" />
        </div>
    </div>
</template>
