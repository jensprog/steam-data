<script setup lang="ts">
import type { Game } from "../types/games";
import type { Developer } from "../types/developers";
import type { Genre } from "../types/genres";

const query = ref("");
const games = ref<Game[]>([]);
const developers = ref<Developer[]>([]);
const genres = ref<Genre[]>([]);
const isLoading = ref(false);
const isOpen = ref(false);

async function search() {
    if (query.value === "") {
        isOpen.value = false;
        return;
    }

    isLoading.value = true;

    const [queryGames, queryDevelopers, queryGenres] = await Promise.all([
        $fetch<{ games: Game[] }>(useApiUrl(`games?search=${query.value}`)),
        $fetch<{ developers: Developer[] }>(useApiUrl(`developers?search=${query.value}`)),
        $fetch<{ genres: Genre[] }>(useApiUrl(`genres?search=${query.value}`)),
    ]);

    games.value = queryGames.games;
    developers.value = queryDevelopers.developers;
    genres.value = queryGenres.genres;

    isOpen.value = true;

    isLoading.value = false;
}

watch(query, search);
</script>

<template>
    <div class="relative">
        <input
            v-model="query"
            type="text"
            placeholder="Search games, developers, genres..."
            class="w-full px-4 py-2 rounded bg-[#171a21] text-[#c7d5e0] border border-[#2a475e] focus:outline-none focus:border-[#66c0f4]" />

        <div
            v-if="isOpen"
            class="absolute z-50 mt-1 w-full bg-[#1b2838] border border-[#2a475e] rounded shadow-lg max-h-96 overflow-y-auto">
            <div v-if="isLoading" class="p-4 text-center text-[#c7d5e0]">Loading...</div>

            <template v-else>
                <div
                    v-if="games.length === 0 && developers.length === 0 && genres.length === 0"
                    class="p-4 text-[#c7d5e0]">
                    No results found.
                </div>

                <template v-else>
                    <div v-if="games.length > 0">
                        <p class="px-4 py-2 text-xs font-semibold text-[#66c0f4] uppercase border-b border-[#2a475e]">
                            Games
                        </p>
                        <NuxtLink
                            v-for="game in games"
                            :key="game.id"
                            :to="`/games/${game.id}`"
                            class="flex items-center gap-3 px-4 py-2 text-[#c7d5e0] hover:bg-[#2a475e] hover:text-[#66c0f4]"
                            @click="isOpen = false">
                            <img
                                v-if="game.header_image"
                                :src="game.header_image"
                                :alt="game.name"
                                class="w-16 h-9 object-cover rounded flex-shrink-0" />
                            <span>{{ game.name }}</span>
                        </NuxtLink>
                    </div>

                    <div v-if="developers.length > 0">
                        <p class="px-4 py-2 text-xs font-semibold text-[#66c0f4] uppercase border-b border-[#2a475e]">
                            Developers
                        </p>
                        <NuxtLink
                            v-for="developer in developers"
                            :key="developer.id"
                            :to="`/developers/${developer.id}`"
                            class="block px-4 py-2 text-[#c7d5e0] hover:bg-[#2a475e] hover:text-[#66c0f4]"
                            @click="isOpen = false">
                            {{ developer.name }}
                        </NuxtLink>
                    </div>

                    <div v-if="genres.length > 0">
                        <p class="px-4 py-2 text-xs font-semibold text-[#66c0f4] uppercase border-b border-[#2a475e]">
                            Genres
                        </p>
                        <NuxtLink
                            v-for="genre in genres"
                            :key="genre.id"
                            :to="`/genres/${genre.id}`"
                            class="block px-4 py-2 text-[#c7d5e0] hover:bg-[#2a475e] hover:text-[#66c0f4]"
                            @click="isOpen = false">
                            {{ genre.name }}
                        </NuxtLink>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
