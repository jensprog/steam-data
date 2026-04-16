<script setup>
const route = useRoute();
const store = useDevelopersStore();
const { developers, links } = storeToRefs(store);
const page = computed(() => Number(route.query.page) || 1);
await store.fetchDevelopers(page.value);

watch(page, async (newPage) => {
    await store.fetchDevelopers(newPage);
});

const prev = computed(() => links.value.previous || undefined);
const next = computed(() => links.value.next || undefined);
</script>

<template>
    <div>
        <ResourceList :items="developers" :base-path="'/developers'" />
        <PaginationLinks :prev="prev" :next="next" />
    </div>
</template>
