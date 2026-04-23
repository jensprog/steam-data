/* Reusable navigation link component that highlights the active route. */
<script setup>
defineProps({
    to: String,
    label: String,
});
</script>

<template>
    <li>
        <NuxtLink
            :to="to"
            class="text-[#c7d5e0] hover:text-[#66c0f4] transition-colors duration-200 [&.router-link-exact-active]:text-[#66c0f4] [&.router-link-exact-active]:underline [&.router-link-exact-active]:underline-offset-4"
            >{{ label }}</NuxtLink
        >
    </li>
</template>
