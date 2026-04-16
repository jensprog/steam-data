/* Component that renders pagination links for all endpoints */
<script setup>
defineProps({
    prev: String,
    next: String,
});
</script>

<template>
    <div class="flex justify-center gap-4 mt-6">
        <NuxtLink
            v-if="prev"
            :to="prev"
            class="bg-[#1b2838] text-[#66c0f4] border border-[#2a475e] hover:border-[#66c0f4] py-2 px-5 rounded transition-colors duration-200">
            &larr; Previous
        </NuxtLink>
        <NuxtLink
            v-if="next"
            :to="next"
            class="bg-[#1b2838] text-[#66c0f4] border border-[#2a475e] hover:border-[#66c0f4] py-2 px-5 rounded transition-colors duration-200">
            Next &rarr;
        </NuxtLink>
    </div>
</template>
