<script setup>
defineProps({
  to: String,
  label: String,
});
</script>

<template>
  <li>
    <NuxtLink :to="to" class="text-[#66c0f4]">{{ label }}</NuxtLink>
  </li>
</template>
