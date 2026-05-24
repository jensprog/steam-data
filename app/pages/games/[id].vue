/* Fetching game details based on the ID from the URL. Creating links for developers and genres to improve navigation */
<script setup>
const route = useRoute();
const gameId = route.params.id;
const { data: game, fetchData: fetchGame } = useApiDetails("games", gameId);
await fetchGame();

const developerLinks = computed(() => game.value?.links.filter((link) => link.title?.startsWith("Developer: ")) ?? []);
const genreLinks = computed(() => game.value?.links.filter((link) => link.title?.startsWith("Genre: ")) ?? []);
</script>

<template>
    <div v-if="game" :key="game.id">
        <div class="flex gap-6 bg-[#1b2838] rounded p-6 mb-8">
            <img :src="game.header_image" :alt="game.name" class="rounded w-auto h-auto object-cover shrink-0" />
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl font-bold text-[#66c0f4]">{{ game.name }}</h1>
                <div class="flex gap-8 text-[#c7d5e0]">
                    <span><span class="text-[#66c0f4] font-semibold">Price:</span> ${{ game.price.toFixed(2) }}</span>
                    <span><span class="text-[#66c0f4] font-semibold">Released:</span> {{ game.release_date }}</span>
                </div>
                <div class="flex gap-8 text-[#c7d5e0]">
                    <span
                        ><span class="text-[#66c0f4] font-semibold">Metacritic:</span> {{ game.metacritic_score }}</span
                    >
                    <span
                        ><span class="text-[#66c0f4] font-semibold">Estimated owners:</span>
                        {{ game.estimated_owners }}</span
                    >
                </div>
                <div>
                    <span
                        ><span class="text-[#66c0f4] font-semibold">Short description:</span>
                        {{ game.short_description }}</span
                    >
                </div>
                <div class="flex gap-2 mt-1">
                    <span v-if="game.windows" class="bg-[#2a475e] text-[#66c0f4] text-sm px-3 py-1 rounded"
                        >Windows</span
                    >
                    <span v-if="game.mac" class="bg-[#2a475e] text-[#66c0f4] text-sm px-3 py-1 rounded">Mac</span>
                    <span v-if="game.linux" class="bg-[#2a475e] text-[#66c0f4] text-sm px-3 py-1 rounded">Linux</span>
                </div>
            </div>
        </div>
        <DataDetail :links="developerLinks" label="Developer" />
        <DataDetail :links="genreLinks" label="Genre" />
    </div>
    <div v-else>
        <p>Loading game details...</p>
    </div>
</template>
