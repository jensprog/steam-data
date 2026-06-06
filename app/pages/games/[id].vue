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
        <div
            class="flex gap-6 rounded p-6 mb-8 bg-cover bg-center"
            :style="
                game.background
                    ? `background-image: linear-gradient(to right, rgba(27,40,56,0.50) 30%, rgba(27,40,56,0.35)), url('${game.background}')`
                    : 'background-color: #1b2838'
            ">
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
                    <span v-if="game.recommendations != null"
                        ><span class="text-[#66c0f4] font-semibold">Recommendations:</span>
                        {{ game.recommendations.toLocaleString() }}</span
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

        <div v-if="game.movies && game.movies.length" class="mb-8">
            <h2 class="text-xl font-semibold text-[#66c0f4] mb-4">Videos</h2>
            <div class="flex gap-4 overflow-x-auto pb-2">
                <div v-for="movie in game.movies" :key="movie.name" class="shrink-0">
                    <a v-if="movie.hls_h264" :href="movie.hls_h264" target="_blank" class="block relative">
                        <img :src="movie.thumbnail" :alt="movie.name" class="rounded w-64 h-36 object-cover" />
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center">
                                <span class="text-white text-xl">▶</span>
                            </div>
                        </div>
                    </a>
                    <img v-else :src="movie.thumbnail" :alt="movie.name" class="rounded w-64 h-36 object-cover" />
                    <p class="text-[#c7d5e0] text-sm mt-1 text-center">{{ movie.name }}</p>
                </div>
            </div>
        </div>

        <div v-if="game.screenshots && game.screenshots.length" class="mb-8">
            <h2 class="text-xl font-semibold text-[#66c0f4] mb-4">Screenshots</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img
                    v-for="(screenshot, index) in game.screenshots"
                    :key="index"
                    :src="screenshot"
                    :alt="`Screenshot ${index + 1}`"
                    class="rounded w-full object-cover" />
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading game details...</p>
    </div>
</template>
