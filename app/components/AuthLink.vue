<script setup>
const { data, refresh } = useFetch("/api/auth/me", { server: false });

async function logout() {
  await useFetch("/api/auth/logout", { method: "POST" });
  await refresh();
  navigateTo("/");
}
</script>

<template>
  <li v-if="data">
    <button class="text-[#66c0f4]" @click="logout">Logout</button>
  </li>
  <li v-else>
    <NuxtLink to="/login" class="text-[#66c0f4]">Login</NuxtLink>
  </li>
</template>
