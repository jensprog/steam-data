/* Component to show a user a message for a short duration */
<script setup>
const message = useState("authMessage");

onMounted(() => {
  if (message.value) {
    setTimeout(() => {
      message.value = ""
    }, 3000);
  }
})
</script>

<template>
  <div v-if="message">
    <strong>{{ message }}</strong>
  </div>
</template>
