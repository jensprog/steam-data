<script setup>
defineProps({
  to: String,
  label: String,
});
</script>

<template>
  <li>
    <NuxtLink :to="to" class="text-[#c7d5e0] hover:text-[#66c0f4] transition-colors duration-200">{{ label }}</NuxtLink>
  </li>
</template>
