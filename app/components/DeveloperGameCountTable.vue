/* Component that renders all developers and their respective amount of games created. Uses isolated pagination for the
component itself */
<script setup>
const store = useDevelopersGamesStore();
const { developers, links } = storeToRefs(store);
const page = ref(1);
await store.fetchDevelopers(page.value);

async function changePage(newPage) {
  page.value = newPage;
  await store.fetchDevelopers(newPage);
}
</script>

<template>
  <div>
    <ItemTable :items="developers" name="Developers" label="Games" />
    <div class="flex justify-center gap-4 mt-6">
      <button
        v-if="links.previous"
        class="bg-[#1b2838] text-[#66c0f4] border border-[#2a475e] hover:border-[#66c0f4] py-2 px-5 rounded transition-colors duration-200"
        @click="changePage(page - 1)"
      >
        &larr; Previous
      </button>
      <button
        v-if="links.next"
        class="bg-[#1b2838] text-[#66c0f4] border border-[#2a475e] hover:border-[#66c0f4] py-2 px-5 rounded transition-colors duration-200"
        @click="changePage(page + 1)"
      >
        Next &rarr;
      </button>
    </div>
  </div>
</template>
