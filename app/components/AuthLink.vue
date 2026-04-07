<script setup>
const token = useCookie("token");
</script>

<template>
  <li v-if="token.value">
    <NuxtLink to="/logout" class="text-[#66c0f4]">Logout</NuxtLink>
  </li>
  <li v-else>
    <NuxtLink :to="to" class="text-[#66c0f4]">Login</NuxtLink>
  </li>
</template>
