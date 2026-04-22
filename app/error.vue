<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
    <div class="flex flex-col min-h-screen bg-[#171a21]">
        <header class="shadow-sm bg-[#1b2838]">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold text-[#66c0f4]">Steam Games Archive</NuxtLink>
            </nav>
        </header>
        <main class="container mx-auto p-4 flex-1 flex flex-col items-center justify-center text-center">
            <h1 class="text-8xl font-bold text-[#66c0f4] mb-4">{{ props.error.status }}</h1>
            <p class="text-xl text-[#c7d5e0] mb-8">{{ props.error.message }}</p>
            <NuxtLink to="/" class="bg-[#1b2838] text-[#66c0f4] px-6 py-2 rounded hover:bg-[#2a475e] transition-colors">
                Go back home
            </NuxtLink>
        </main>
    </div>
</template>
