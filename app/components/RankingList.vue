<script setup lang="ts">
defineProps<{
    games: {
        rank: number;
        name: string;
        header_image: string;
        concurrent_in_game: number;
        peak_in_game: number;
    }[];
}>();
</script>

<template>
    <div class="bg-[#1b2838] rounded overflow-hidden">
        <div
            v-for="game in games"
            :key="game.rank"
            class="flex items-center gap-4 px-4 py-3 border-b border-[#2a475e] hover:bg-[#2a475e] transition-colors duration-150">
            <span class="text-[#66c0f4] font-bold w-6 text-right shrink-0">#{{ game.rank }}</span>
            <img :src="game.header_image" :alt="game.name" class="w-24 h-14 object-cover rounded shrink-0" />
            <div class="flex-1 min-w-0">
                <p class="text-[#c7d5e0] font-semibold truncate">{{ game.name }}</p>
                <p class="text-sm text-[#66c0f4]">{{ game.concurrent_in_game.toLocaleString() }} playing now</p>
                <p class="text-xs text-[#8f98a0]">Peak 24h: {{ game.peak_in_game.toLocaleString() }}</p>
            </div>
        </div>
    </div>
</template>
