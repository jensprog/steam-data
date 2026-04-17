/* Shows details for every genre and their related games. Using ResourceLinks component to display the games */
<script setup>
const route = useRoute();
const genreId = route.params.id;
const page = ref(1);
const genre = ref(null);

async function fetchGenre(newPage = 1) {
    genre.value = await $fetch(`/api/genres/${genreId}`, { query: { page: newPage, limit: 20 } });
}

await fetchGenre();
</script>

<template>
    <div v-if="genre" :key="genre.id">
        <DataDetail :name="genre.name" :links="genre.links" label="Game" />
        <div class="flex justify-center gap-4 mt-6">
            <button
                v-if="genre.pagination_links?.previous"
                class="bg-[#1b2838] text-[#66c0f4] border border-[#2a475e] hover:border-[#66c0f4] py-2 px-5 rounded transition-colors duration-200"
                @click="fetchGenre(page - 1); page--">
                &larr; Previous
            </button>
            <button
                v-if="genre.pagination_links?.next"
                class="bg-[#1b2838] text-[#66c0f4] border border-[#2a475e] hover:border-[#66c0f4] py-2 px-5 rounded transition-colors duration-200"
                @click="fetchGenre(page + 1); page++">
                Next &rarr;
            </button>
        </div>
    </div>
</template>
