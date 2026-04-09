<script setup>
const name = ref("");
const price = ref(0);
const developer = ref("");
const genre = ref("");
const short_description = ref("");
const Windows = ref(false);
const Mac = ref(false);
const Linux = ref(false);

const submitForm = async () => {
  try {
    await $fetch("/api/games", {
      method: "POST",
      body: {
        name: name.value,
        price: price.value,
        developers: [developer.value],
        genres: [genre.value],
        short_description: short_description.value,
        windows: Windows.value,
        mac: Mac.value,
        linux: Linux.value,
      },
    });
    console.log("Game created successfully");
  } catch (error) {
    console.error("Error creating game:", error);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Name</label>
        <input v-model="name" type="text" name="name" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700">Price</label>
        <input v-model="price" type="number" step="0.01" name="price" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="developer" class="block text-gray-700">Developer</label>
        <input v-model="developer" type="text" name="developer" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="genre" class="block text-gray-700">Genre</label>
        <input v-model="genre" type="text" name="genre" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="short_description" class="block text-gray-700">Short Description</label>
        <input v-model="short_description" name="short_description" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="Windows" class="block text-gray-700">Windows</label>
        <input v-model="Windows" type="checkbox" name="Windows" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="Mac" class="block text-gray-700">Mac</label>
        <input v-model="Mac" type="checkbox" name="Mac" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label for="Linux" class="block text-gray-700">Linux</label>
        <input v-model="Linux" type="checkbox" name="Linux" class="w-full border rounded px-3 py-2" />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Game</button>
    </form>
  </div>
</template>
