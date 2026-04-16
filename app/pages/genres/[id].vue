/* Shows details for every genre and their related games. Using ResourceLinks component to display the games */
<script setup>
const route = useRoute();
const genreId = route.params.id;
const { data: genre, fetchData: fetchGenre } = useApiDetails("genres", genreId);
await fetchGenre();

const gameLinks = computed(() => genre.value?.links.filter((link) => link.rel === "related") ?? []);
</script>

<template>
    <div v-if="genre" :key="genre.id">
        <h1>
            <strong>{{ genre.name }}</strong>
        </h1>
        <ResourceLinks :links="gameLinks" label="Game" />>
    </div>
</template>
