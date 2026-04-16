<script setup>
defineProps({
    to: String,
    label: String,
});
</script>

<template>
    <div class="create-button">
        <NuxtLink :to="to" class="bg-[#66c0f4] text-white px-4 py-2 rounded hover:bg-[#66c0f4]/90">
            Create New Game
        </NuxtLink>
    </div>
</template>
