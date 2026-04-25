/* Component to show a user a message for a short duration */
<script setup>
const message = useState("authMessage");

onMounted(() => {
    if (message.value) {
        setTimeout(() => {
            message.value = "";
        }, 3000);
    }
});
</script>

<template>
    <div
        v-if="message"
        class="fixed top-6 left-1/2 -translate-x-1/2 bg-[#1b2838] border border-[#66c0f4] text-[#c7d5e0] px-5 py-3 rounded shadow-lg z-50 whitespace-nowrap">
        {{ message }}
    </div>
</template>
