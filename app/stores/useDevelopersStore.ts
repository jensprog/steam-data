import type { Developer } from "../types/developers";

export const useDevelopersStore = defineStore("developers", () => {
  const developers = ref<Developer[]>([]);
  const loaded = ref(false);

  async function fetchDevelopers() {
    if (loaded.value) return;

    const response = (await $fetch("/api/developers")) as { developers: Developer[] };
    developers.value = response.developers;
    loaded.value = true;
  }

  return { developers, loaded, fetchDevelopers };
});
