/* Authentication component for the navigation bar on the web app to display either logout or login depending on state
*/
<script setup>
const { data, refresh } = useFetch("/api/auth/me", { server: false });

/* Logs out the user and redirects to the home page. */
async function logout() {
    await useFetch("/api/auth/logout", { method: "POST" });
    await refresh();
    navigateTo("/login?toast=logout");
}
</script>

<template>
    <li v-if="data">
        <button class="text-[#c7d5e0] hover:text-[#66c0f4] transition-colors duration-200" @click="logout">
            Logout
        </button>
    </li>
    <li v-else>
        <NuxtLink to="/login" class="text-[#c7d5e0] hover:text-[#66c0f4] transition-colors duration-200"
            >Login</NuxtLink
        >
    </li>
</template>
